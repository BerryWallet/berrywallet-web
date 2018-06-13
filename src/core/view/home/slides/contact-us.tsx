import React from 'react';
import cn from 'classnames';
import {map} from 'lodash';
import {ISlideProps} from '../utils';
import {socialList, ISocial, contactEmails, IContactEmail} from '../../../data';
import {Container, ContainerSlide, Topic} from '../../../ui';
import './contact-us.scss';

export class ContactUsSlide extends React.PureComponent<ISlideProps> {

    protected renderSocialItem = (social: ISocial) => {
        const socialLinkProps = {
            href: social.url,
            className: 'contact-social__item',
            target: '_blank',
            key: social.label
        };

        return <a {...socialLinkProps}>{social.label}</a>;
    };

    protected renderEmail = (email: IContactEmail) => {
        return (
            <div className="contact-email__item" key={email.label}>
                <label className="contact-email__item-label">{email.label}</label>
                <a href={`mailto:${email.email}`} className="contact-email__item-email" target="_blank">
                    {email.email}
                </a>
            </div>
        );
    };

    public render(): JSX.Element {
        return (
            <Container>
                <ContainerSlide className={this.props.isActive ? '-is-active' : undefined}>
                    <Topic
                        topicTitle="Contact Us"
                        subtitle="We are always glad to have a good interlocutor."
                    />
                </ContainerSlide>

                <div className={cn('slide-sticky', 'slide-sticky-contact', {'-is-active': this.props.isActive})}>
                    <div className="contact-email">
                        <div className="contact-email__wrapper">
                            {map(contactEmails, this.renderEmail)}
                        </div>
                    </div>


                    <div className="contact-social">{map(socialList, this.renderSocialItem)}</div>
                </div>
            </Container>
        );
    }
}
