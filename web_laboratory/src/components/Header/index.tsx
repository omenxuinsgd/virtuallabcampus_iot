import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LabelLogo, DropdownContainer, DropdownItem, DropdownSymbol
} from "./styles"
import { Link, NavLink } from 'react-router-dom';

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  interface CustomNavLinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
    lab: string; // Tambahkan tipe data untuk properti lab
  }
  
  const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, className, children, lab }) => (
    <NavLink to={{ pathname: to, state: { lab } }} className={className}>
      {children}
    </NavLink>
  );
  

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      if(element){
        element.scrollIntoView({
          behavior: "smooth",
        });
        setVisibility(false);
      }
    };
    const [dropdownVisible, setDropdownVisibility] = useState(false);
    const [dropdownVisible2, setDropdownVisibility2] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisibility(!dropdownVisible);
    };

    const toggleDropdown2 = () => {
      setDropdownVisibility2(!dropdownVisible2);
    };

    return (
      <>
        {/* <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall> */}
        <CustomNavLinkSmall onClick={toggleDropdown}>
          <Span>{t('Artikel Lab')}</Span>
          <DropdownSymbol>{dropdownVisible ? '▲' : '▼'}</DropdownSymbol>
          {dropdownVisible && (
            <DropdownContainer style={{fontSize: '12px'}}>
              <DropdownItem >
                <CustomNavLink to="/data/perlab/Lab. Instrumentasi & Robotika" className="navbar-item" lab="Lab. Instrumentasi & Robotika">
                  Instrumentasi & Robotika
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perlab/Lab. Astrofisika" className="navbar-item" lab="Lab. Astrofisika">
                  Astrofisika
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perlab/Lab. Fisika Bumi" className="navbar-item" lab="Lab. Fisika Bumi">
                  Fisika Bumi
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perlab/Lab. Nuklir Medis" className="navbar-item" lab="Lab. Nuklir Medis">
                  Nuklir Medis
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perlab/Lab. Modeling" className="navbar-item" lab="Lab. Modeling">
                  Modeling
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perlab/Lab. Fisika Material" className="navbar-item" lab="Lab. Fisika Material">
                  Fisika Material
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perlab/Lab. Karakterisasi Fisika Material" className="navbar-item" lab="Lab. Karakterisasi Fisika Material">
                  Karakterisasi Fisika Material
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perlab/Lab. Workshop" className="navbar-item" lab="Lab. Workshop">
                  Workshop
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perlab/Lab. Fisika Dasar" className="navbar-item" lab="Lab. Fisika Dasar">
                  Fisika Dasar
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perlab/Lab. Fisika Lanjutan" className="navbar-item" lab="Lab. Fisika Lanjutan">
                  Fisika Lanjutan
                </CustomNavLink>
              </DropdownItem>
            </DropdownContainer>
          )}
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Link to="/news">
            <Span>{t("Berita")}</Span>
          </Link>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={toggleDropdown2}>
          <Span>{t('Barang Lab')}</Span>
          <DropdownSymbol>{dropdownVisible2 ? '▲' : '▼'}</DropdownSymbol>
          {dropdownVisible2 && (
            <DropdownContainer style={{fontSize: '12px'}}>
              <DropdownItem >
                <CustomNavLink to="/data/perfas/instrument" className="navbar-item" lab="instrument">
                  Instrumentasi & Robotika
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perfas/astrofisika" className="navbar-item" lab="astrofisika">
                  Astrofisika
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perfas/geofisika" className="navbar-item" lab="geofisika">
                  Fisika Bumi
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perfas/nuklir" className="navbar-item" lab="nuklir">
                  Nuklir Medis
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perfas/modeling" className="navbar-item" lab="modeling">
                  Modeling
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perfas/fismat" className="navbar-item" lab="fismat">
                  Fisika Material
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perfas/karmat" className="navbar-item" lab="karmat">
                  Karakterisasi Fisika Material
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perfas/workshop" className="navbar-item" lab="workshop">
                  Workshop
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perfas/basic" className="navbar-item" lab="basic">
                  Fisika Dasar
                </CustomNavLink>
              </DropdownItem>
              <DropdownItem >
                <CustomNavLink to="/data/perfas/advance" className="navbar-item" lab="advance">
                  Fisika Lanjutan
                </CustomNavLink>
              </DropdownItem>
            </DropdownContainer>
          )}
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo-uin.png" width="40px" height="30px" />
              <LabelLogo style={{fontSize:'14px'}}>
                  Laboratorium Fisika <br />
                  Fakultas Sains dan Teknologi <br />
                  UIN Sunan Gunung Djati Bandung
              </LabelLogo>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
