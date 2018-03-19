import { Request, Response } from 'express';
import { UIKitView } from '../views/ui-kit-view';

/**
 * GET /
 * Home page.
 */
export function index(req: Request, res: Response): void {
    const view = new UIKitView(
        'UI kit',
        ['ui-kit'],
        {}
    );
    res.send(view.render());
}
