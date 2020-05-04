import React from "react";
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

function MyFooter() {
  return (
    <Footer className="myfooter" >
      <FooterSection >
          <FooterLinkList>
              <p className='title-footer'>Copyright 2020</p>
          </FooterLinkList>
      </FooterSection>
</Footer>
  );
}

export default MyFooter;