import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img`
    max-width: 168px;

    @media (max-width: 800px) {
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;    
    z-index: 1;
    
    position: fixed;
    top: 0;
    left: 0%;
    padding-left: 5%;
    padding-right: 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    bckground-color: var(--black);
    border-botom: 2px solid var(--primary);

    @media (max-width: 800px) {
        height: 40px;
        justify-content: center;
    }
`;