import { Request, Response } from 'express';
import { validate as isValidEmail } from 'email-validator';

import { HomeView } from '../views/home-view';
import Subscription from '../models/subscription';

/**
 * GET /
 * Home page.
 */
export function index(req: Request, res: Response): void {
    const view = new HomeView(
        'BerryWallet',
        ['main'],
        {}
    );

    res.send(view.render());
}

export async function subscribe(req: Request, res: Response): Promise<void> {
    const { email } = req.body;
    if (email === undefined) {
        res.json({ error: 'Plese provide your email address.' });
        return;
    }

    if (!isValidEmail(email)) {
        res.json({ error: 'Plese provide a valid email address.' });
        return;
    }

    if (await Subscription.exist(email)) {
        res.json({ error: 'You\'re already subscribed.' });
        return;
    }

    await Subscription.create({ email });
    res.json({ msg: 'Thank you for subscribing.' });
}
