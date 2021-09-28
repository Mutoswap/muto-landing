import { Button } from '../../components/button';
import { HeaderTypes } from './types';
import './index.scss';

export const Header = ({ withBtn = true }: HeaderTypes) => (
  <header className="header">
    <img src="/images/logo.png" width={236} alt="Ditoswap logo" />
    {withBtn && <Button children="Connect Wallet" isMain />}
  </header>
);
