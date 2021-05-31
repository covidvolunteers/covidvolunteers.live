import { Fragment, useState } from 'react'
import whatsappIcon from "../SearchBar/whatsapp.webp";

export default function Titlebar( ) {
const [menuState, setMenuState] = useState(false);
const [linksState, setlinksState] = useState(false);

return (
  <>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setMenuState(!menuState)}>
              <span class="sr-only">Open main menu</span>
              {/* <!--
                Icon when menu is closed.

                Heroicon name: outline/menu

                Menu open: "hidden", Menu closed: "block"
              --> */}
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            {/* <!--
                Icon when menu is open.

                Heroicon name: outline/x

                Menu open: "block", Menu closed: "hidden"
              -->  */}
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              
              <h4 className="text-2xl tracking-tight text-white">
                CovidVolunteers
              </h4>    
            </div>
          </div>
          <div class="hidden absolute inset-y-0 right-0 md:flex items-center pr-2 sm ">
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">add verifed resource</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About us</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Join <img className="inline h-5" src={whatsappIcon} height="25px"/> Group</a>
                <div class="relative">
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => setlinksState(!linksState)}>Useful Links</a>            
                    <div class={`{origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30${linksState ? '' : ' hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                      <a href="https://cowinmap.com/?city=madurai" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Cowin Hospital Map</a>
                      <a href="https://tncovidbeds.tnega.org/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">TN Covid beds</a>
                    </div>
                </div>
          </div>
        </div>
      </div>

    {/* <!-- Mobile menu, show/hide based on menu state. -->  */}
      <div class={`sm:hidden ${menuState ? '' : 'hidden'}`} id="mobile-menu" >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#" class="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium" aria-current="page">add verifed resource</a>

          <a href="#" class="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">About us</a>

          <a href="#" class="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Join <img className="inline h-5" src={whatsappIcon} height="25px"/> Group</a>
          <div class="relative">
            <a href="#" class="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium" onClick={() => setlinksState(!linksState)}>Useful Links</a>            
              <div class={`{origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30${linksState ? '' : ' hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <a href="https://cowinmap.com/?city=madurai" class="block px-4 py-2 text-base text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Cowin Hospital Map</a>
                <a href="https://tncovidbeds.tnega.org/" class="block px-4 py-2 text-base text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">TN Covid beds</a>
              </div>
          </div>
        </div>
      </div>
    </nav>
 </>);
}