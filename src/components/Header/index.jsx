import React, { useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getPages } from '@/actions/apiActions';
import {
  Container, Nav, Navbar, NavbarBrand, NavItem, NavLink,
} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import './style.scss';
import { CATEGORY, PAGE } from '@/constants';

function Header() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const pages = useSelector((state) => state.pages);
  const matchedCategory = useMatch(CATEGORY);
  const matchedPage = useMatch(PAGE);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getPages());
  }, []);

  return (
    <Navbar className="pt-3 pb-3 border-bottom" expand="lg" variant="light">
      <Container>
        <NavbarToggle className="position-relative top-0 left-0" />
        <NavbarCollapse className="w-100 order-1 order-md-0">
          <Nav className="me-auto">
            {categories.data?.results.map((category) => (
              <NavItem key={category.slug}>
                <NavLink
                  as={Link}
                  to={`/category/${category.slug}`}
                  active={matchedCategory && category.slug === matchedCategory.params.slug}
                >
                  {category.name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </NavbarCollapse>
        <div className="mx-auto order-0">
          <NavbarBrand className="mx-auto">
            <Link
              to="/"
              className="m-0 text-decoration-none fs-2 text-dark fw-bold"
            >
              Catri.us
            </Link>
          </NavbarBrand>
        </div>
        <NavbarCollapse className="w-100 order-3">
          <Nav className="ms-auto">
            {pages.data?.results.map((page) => (
              <NavItem key={page.slug}>
                <NavLink
                  as={Link}
                  to={`/page/${page.slug}`}
                  active={matchedPage && page.slug === matchedPage.params.slug}
                >
                  {page.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </NavbarCollapse>
        <NavbarToggle className="position-relative top-0 left-0 invisible" />
      </Container>
    </Navbar>
  );
}

export default Header;
