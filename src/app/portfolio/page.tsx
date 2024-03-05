import MovingUnderline from '@/components/reusable/MovingUnderline';
import { PortfolioMain, PortfolioTitle } from './contents';

export default function Portfolio() {
    return <PortfolioMain>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <MovingUnderline widthFactor={60} justifyContent='left'/>
    </PortfolioMain>
}