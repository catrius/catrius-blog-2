import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getPages } from '@/actions/apiActions';

function Header() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const pages = useSelector((state) => state.pages);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getPages());
  }, [dispatch]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-3 pb-3 border-bottom">
      <div className="container">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse">
          <ul className="navbar-nav me-auto">
            {categories.data?.map((category) => (
              <li className="nav-item" key={category.slug}>
                <Link to={`/category/${category.slug}`} className="nav-link">{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto order-0">
          <div className="navbar-brand mx-auto">
            <Link to="/" className="logo m-0 text-uppercase text-decoration-none fs-2 text-dark fw-bold">Catri.us</Link>
          </div>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target=".dual-collapse">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse">
          <ul className="navbar-nav ms-auto">
            {pages.data?.map((page) => (
              <li className="nav-item" key={page.slug}>
                <Link to={`/page/${page.slug}`} className="nav-link">{page.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
