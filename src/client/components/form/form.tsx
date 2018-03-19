import * as React from 'react';
import * as classnames from 'classnames';

import { Input, IInputProps } from '../input/input';

export interface IFormProps {
    children: React.ReactNode;
    className?: string;
    onSubmit?: (formData: Record<string, string>) => void;
}

export interface IFormState {
    fromData: Record<string, string>;
    isPending: boolean;
}

export class Form extends React.PureComponent<IFormProps, IFormState> {
    public readonly state: IFormState = {
        fromData: {},
        isPending: false,
    };

    private readonly _changeHandlers: Record<string, (event: React.FormEvent<HTMLInputElement>) => void> = {};

    public constructor(props: IFormProps) {
        super(props);

        React.Children.forEach(props.children, this._handleChildren);
    }

    public render(): JSX.Element {
        const {
            className,
            children,
        } = this.props;

        return (
            <form
                className={ classnames('form', className) }
                onSubmit={ this._onSubmit }
            >
                {
                    React.Children.map(children, this._handleChildrenRender)
                }
            </form>
        );
    }

    private _onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { onSubmit } = this.props;
        if (onSubmit !== undefined) {
            onSubmit(this.state.fromData);
        }
    }

    private _handleChildren = (child: React.ReactChild, index: number) => {
        if (React.isValidElement<IInputProps>(child) && child.type === Input) {
            this._handleInputChild(child);
        }
    }

    private _handleInputChild(child: React.ReactElement<IInputProps>): void {
        if (process.env.NODE_ENV !== 'production' && child.props.onChange !== undefined) {
            console.warn('Input#onChange will be owerriten');
        }

        const fieldName = child.props.name;
        this._changeHandlers[fieldName] = (event: React.FormEvent<HTMLInputElement>) => {
            this.setState({
                fromData: {
                    ...this.state.fromData,
                    // tslint:disable-next-line:no-any
                    [fieldName]: (event.target as any).value,
                }
            });
        };
    }

    private _handleChildrenRender = (child: React.ReactChild, index: number) => {
        if (React.isValidElement<IInputProps>(child) && child.type === Input) {
            return this._handleInputChildRender(child);
        }

        return child;
    }

    private _handleInputChildRender(child: React.ReactElement<IInputProps>): React.ReactElement<IInputProps> {
        const fieldName = child.props.name;
        const childProps: IInputProps = {
            ...child.props,
            className: classnames(child.props.className, 'form__input'),
            onChange: this._changeHandlers[fieldName],
            value: this.state.fromData[fieldName],
        };

        return React.cloneElement(child, childProps);
    }
}
