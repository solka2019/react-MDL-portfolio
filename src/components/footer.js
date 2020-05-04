import React from "react";
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

function MyFooter() {
  return (
    <Footer className="myfooter" size="mini">
      <FooterSection type="left" logo="Title">
          <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
          </FooterLinkList>
      </FooterSection>
</Footer>
  );
}

export default MyFooter;