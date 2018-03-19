import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as classnames from 'classnames';
import { debounce, throttle } from '../../utils/utils';

import { SubscriptionContainer } from '../subscription-container/subscription-container';
import { Form } from '../form/form';
import { Input } from '../input/input';
import { Button } from '../button/button';

import * as ApiService from '../../utils/api-service';
import {
    SubscriptionResult,
    ISubscriptionSuccess,
} from '../../utils/api-service';

type ApiService = typeof ApiService;

export interface ISubscriptionFormProps {
}

export interface ISubscriptionFormState {
    isSubmitting: boolean;
    message: null | string;
    error: null | string;
}

export interface ISubscriptionFormContext {
    apiService: ApiService;
}

export class SubscriptionForm extends React.PureComponent<ISubscriptionFormProps, ISubscriptionFormState> {
    public static readonly contextTypes: PropTypes.ValidationMap<ISubscriptionFormContext> = {
        apiService: PropTypes.object,
    };

    public readonly state: ISubscriptionFormState = {
        isSubmitting: false,
        message: null,
        error: null,
    };

    private _apiService: ApiService;
    private _onFormSubmitThrottled: (formData: Record<string, string>) => void = throttle(this._onFormSubmit.bind(this), 500);
    private _setStatusDebounced: (subscriptionResult: SubscriptionResult) => void = debounce(this._setStatus, 700);

    public constructor(props: ISubscriptionFormProps, context: ISubscriptionFormContext) {
        super(props, context);
        this._apiService = context.apiService;
    }

    public render(): JSX.Element {
        const duration = 300;
        const defaultStyle = {
          transition: `opacity ${duration}ms ease-in-out`,
          opacity: 0,
        };
        // tslint:disable-next-line:no-any
        const transitionStyles: any = {
          entering: { opacity: 1 },
          entered:  { opacity: 1 },
        };
        return (
            <SubscriptionContainer
                header="Let Us Pop up in Your Inbox"
                subHeader={ <React.Fragment>Subscribe for the newsletters!<br />The most interesting stuff will land straight to your inbox.</React.Fragment> }
            >
                <TransitionGroup className="subscription-form">
                    {
                        this.state.message !== null
                        ? (
                            <CSSTransition
                                key="0"
                                timeout={ 300 }
                                classNames="fade-animation"
                            >
                                <span className="subscription-form__message">{ this.state.message }</span>
                            </CSSTransition>
                        )
                        : this._getForm()
                    }
                </TransitionGroup>
            </SubscriptionContainer>
        );
    }

    private _getForm(): JSX.Element[] {
        const result: JSX.Element[] = [(
            <CSSTransition
                key="1"
                timeout={ 300 }
                classNames="fade-animation"
            >
                <Form
                    onSubmit={ this._onFormSubmitThrottled }
                    className={
                        classnames(
                            'form--column-center',
                            'subscription-form__form',
                            'fade-animation',
                            { 'subscription-form__form--is-submitting': this.state.isSubmitting },
                            { 'subscription-form__form--has-error': this.state.error !== null },
                        )
                    }
                >
                    <Input name="email" placeholder="Your email address" />
                    <Button>Subscribe</Button>
                </Form>
            </CSSTransition>
        )];

        if (this.state.error !== null) {
            result.push(
                <CSSTransition
                    key="2"
                    timeout={ 300 }
                    classNames="fade-animation"
                >
                    <span className="subscription-form__error">{ this.state.error }</span>
                </CSSTransition>
            );
        }

        return result;
    }

    private async _onFormSubmit(formData: Record<string, string>): Promise<void> {
        this.setState({
            isSubmitting: true,
            message: null,
            error: null,
        });
        const subscriptionResult = await this._apiService.subscribe(formData);
        this._setStatusDebounced(subscriptionResult);
    }

    private _setStatus(subscriptionResult: SubscriptionResult): void {
        const newState: ISubscriptionFormState = {
            ...this.state,
            isSubmitting: false
        };

        if (isSubmittingSuccess(subscriptionResult)) {
            newState.message = subscriptionResult.msg;
        } else {
            newState.error = subscriptionResult.error;
        }

        this.setState(newState);
    }
}

function isSubmittingSuccess(subscriptionResult: SubscriptionResult): subscriptionResult is ISubscriptionSuccess {
    // tslint:disable-next-line:no-any
    return (subscriptionResult as any).msg !== undefined && (subscriptionResult as any).error === undefined;
}
