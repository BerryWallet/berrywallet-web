import { BaseView, IInitState } from '../utils/base-view';
import { HomeView as HomeViewComponent, IHomeViewProps } from '../../client/views/home-view';

export interface IHomeViewInitState extends IInitState<IHomeViewProps> {
}

export class HomeView extends BaseView<IHomeViewInitState, typeof HomeViewComponent> {
    protected _getComponent(): typeof HomeViewComponent {
        return HomeViewComponent;
    }
}
