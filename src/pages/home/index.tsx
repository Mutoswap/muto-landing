import React from 'react';

import { useHistory } from 'react-router-dom';
import { Header } from '../../layouts/header';
import { Button } from '../../components/button';
import { IconLink } from '../../components/iconLink';
import { CdoFinanceBlock } from '../../components/cdoFinanceBlock';
import { FadeInScroll } from '../../components/fadeIn';
import { typeFade } from '../../components/fadeIn/types';

import './index.scss';

interface IDataButton {
  text: string;
  link: string;
  isHovered: boolean;
}
const mainButtonDummy: IDataButton[] = [
  {
    text: 'Launch DTO',
    link: 'https://ditoswap.com/',
    isHovered: true,
  },
  {
    text: 'Buy DITO',
    link: 'https://exchange.ditoswap.com/',
    isHovered: false,
  },
  {
    text: 'Documentation',
    link: 'https://ditoswap.gitbook.io/dito-swap/',
    isHovered: false,
  },
];

interface ISocial {
  icon: string;
  link: string;
}

const socials: ISocial[] = [
  // { icon: '/images/icons/discord.svg', link: '' },
  // { icon: '/images/icons/telegram.svg', link: '' },
  {
    icon: '/images/icons/twitter.svg',
    link: 'https://twitter.com/changwa18111087',
  },
  // { icon: '/images/icons/rounds.svg', link: '' },
];

export function HomePage() {
  const history = useHistory();
  const [mainButtons, setMainButtons] = React.useState(mainButtonDummy);

  const handleButtonHover = (index: number) => {
    const buttons = mainButtons.map((btn, i) => {
      let data: IDataButton = { ...btn, isHovered: i === index };
      return data;
    });
    setMainButtons(buttons);
  };

  return (
    <div
      className="home"
      style={{ background: 'url("/images/home-background.svg") 0% 0% / cover' }}
    >
      <Header withBtn={false} />
      <article className="homeMain">
        <h1>
          Decentralized Trading Protocol on BSC network with a referral system
        </h1>
        <p>
          Enjoy profitable yield farming and exchanges with the lowest fees in
          DeFi space!
        </p>
        <div className="homeMainBtns">
          {mainButtons.map((btn, i) => (
            <Button
              onClick={() => window.open(btn.link)}
              onMouseEnter={() => handleButtonHover(i)}
              key={i}
              isMain={btn?.isHovered}
            >
              {btn?.text}
            </Button>
          ))}
        </div>
      </article>
      <div className="homeSocials">
        {socials.map((social, i) => (
          <IconLink key={i} imgSrc={social.icon} linkSrc={social.link} />
        ))}
      </div>
      <CdoFinanceBlock />
      <FadeInScroll
        selectorClass="homeBot"
        type={typeFade.FadeIn}
        checkPoint={200}
      >
        <div className="homeBot">
          <div className="homeBotWrap">
            {['Leveraged Yield', 'Risk Mitigation', 'Custom Tenure'].map(
              (el, i) => (
                <div key={i} className="homeBotItem">
                  <img
                    src={`/images/icons/${el
                      .toLowerCase()
                      .split(' ')
                      .join('-')}.svg`}
                    alt="icon"
                  />
                  <div className="homeBotItemText">{el}</div>
                </div>
              )
            )}
          </div>
          <div className="homeBotWrap">
            {[
              'Inherent Insurance',
              'Asset Collateralisation',
              'Gas Efficient',
            ].map((el, i) => (
              <div key={i} className="homeBotItem">
                <img
                  src={`/images/icons/${el
                    .toLowerCase()
                    .split(' ')
                    .join('-')}.svg`}
                  alt="icon"
                />
                <div className="homeBotItemText">{el}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeInScroll>
      <FadeInScroll
        selectorClass="homeBottom"
        type={typeFade.FadeBottonUp}
        checkPoint={500}
      >
        <div className="homeBottom fade-in-up">
          {[
            'Community-Owned',
            'Fair Launch',
            'Bootstrapped (No investor!)',
          ].map((el, i) => (
            <div key={i} className="homeBottomItem">
              <img
                src={`/images/icons/${
                  i === 0 ? 'community' : el.split(' ')[0].toLocaleLowerCase()
                }.svg`}
                alt="icon"
              />
              <div className="homeBottomItemText">{el}</div>
            </div>
          ))}
        </div>
      </FadeInScroll>
    </div>
  );
}
