import MovingUnderline from '@/components/reusable/moving-underline/MovingUnderline';
import { PortfolioMain, PortfolioTitle } from './contents';

export default function Portfolio() {
    return <PortfolioMain>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <MovingUnderline />
    </PortfolioMain>
}