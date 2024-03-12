import MovingUnderline from '@/components/reusable/MovingUnderline';
import { PortfolioMain, PortfolioTitle } from './contents';
import PortfolioPosts from '@/components/portfolio/PortfolioPosts';

export default function Portfolio() {
    return <PortfolioMain>
        <PortfolioTitle>Portfólio</PortfolioTitle>
        <MovingUnderline widthFactor={60} $justifyContent='left'/>
        <PortfolioPosts />
    </PortfolioMain>
}