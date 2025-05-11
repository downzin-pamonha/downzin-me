import React from 'react';
import styles from './IconSocial.module.scss';

import { socialData } from './socialData';
import { Tooltip } from 'react-tooltip';

export default function IconSocial() {
    return (
        <div className={styles.social_icons} id="social-icons-container">
            {socialData.map((texto, index) => (
                <div
                    key={index}
                    className={`${styles.social_icons__icon} ${styles[`social_icons__icon--${index}`]}`}
                >
                    <a
                        href={texto.link}
                        target='_blank'
                        className={styles.social_icons__link}
                        id={`tooltip-${index}`}
                    >
                        <img src={require(`${texto.iconSrc}`)} alt={texto.altText} />
                        <span className={styles.social_icons__label}>{texto.labelText}</span>
                    </a>
                    <div className={styles.social_icons__tooltip}>
                        <Tooltip
                            anchorSelect={`#tooltip-${index}`}
                            place="bottom"
                            style={{
                                marginTop: '10px',
                                backgroundColor: 'rgb(0, 0, 0)',
                                borderRadius: '15px',
                            }}
                        >
                            {texto.tooltipText}
                        </Tooltip>
                    </div>
                </div>
            ))}
        </div>
    );
}
