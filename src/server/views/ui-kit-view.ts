import { BaseView, IInitState } from '../utils/base-view';
import { UIKitView as UIKitViewComponent, IUIKitViewProps } from '../../client/views/ui-kit-view';

export interface IHomeViewInitState extends IInitState<IUIKitViewProps> {
}

export class UIKitView extends BaseView<IHomeViewInitState, typeof UIKitViewComponent> {
    protected _getComponent(): typeof UIKitViewComponent {
        return UIKitViewComponent;
    }
}
