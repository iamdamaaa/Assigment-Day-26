import React, { useState } from 'react';
import menuIcon from '../../assets/NavbarIcons/menu.svg';
import serachIcon from '../../assets/NavbarIcons/search.svg';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <nav className='flex justify-between p-2 m-1'>
      {/* tombol hamburger */}
      <div>
        <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={menuIcon} alt="Menu List" />
        </button>
      </div>
      <div>{`dama`}</div>
      <div>
        <img src={serachIcon} alt= 'Search' />
      </div>
      {/* mobile hamburger clik */}
      {isMenuOpen && (
      <div className='flex-row bg-gray-800 text-white w-full text-left'>
        <div>Newest</div>
        <div>Top Movies</div>
        <div>Ranking</div>
        <div>Manga List</div>
        <div>Creators</div>
        <div>Favorite</div>
        <div>About Us</div>
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
        </div>
      </div>
      )}
    </nav>
  );
}

export default Navbar;
