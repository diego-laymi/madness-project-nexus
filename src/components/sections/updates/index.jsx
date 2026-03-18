import { WhiteBackground } from "../../../styles";
import { WhiteDividerLeft, WhiteDividerRight } from "../../dividers";
import {
  HoverEffet,
  Image,
  ImageContainer,
  ItemTextWrapper,
  Link,
  Title,
  UpdateItemContainer,
  UpdateLink,
  UpdatesContainer,
  UpdatesWrapper,
} from "./styles";

export function UpdatesSection() {
  return (
    <WhiteBackground>
      <WhiteDividerLeft />
      <UpdatesContainer>
        <UpdatesWrapper>
          <Title>NEWS & UPATES</Title>
          <UpdateLink
            href="https://store.steampowered.com/news/app/488860/view/534342138624737336"
            target="_blank"
          >
            <UpdateItemContainer>
              <img
                className="coner-1"
                src="./assets/corners_White/cornerBottomLeft_Lg.png"
                alt=""
              />
              <img
                className="coner-2"
                src="./assets/corners_White/cornerTopLeft_Lg.png"
                alt=""
              />
              <img
                className="coner-3"
                src="./assets/corners_White/cornerBottomRight_Lg.png"
                alt=""
              />
              <img
                className="coner-4"
                src="./assets/corners_White/cornerTopRight_Lg.png"
                alt=""
              />
              <ItemTextWrapper>
                <h4>Auditor Plush & Shirt + Development Sitrep!</h4>
                <p>
                  So, now that we've gotten some practice under our belts
                  turning Gods into plushies, we decided to aim a little higher
                  this time. That's right it's that moody mortal meddler
                  himself, the Auditor! Coming at you not just as a squishy
                  little plush and pin, but also as a t-shirt!
                </p>
              </ItemTextWrapper>
              <ImageContainer>
                <Image src="./images/updates/update1.webp" alt="" />
              </ImageContainer>
            </UpdateItemContainer>
          </UpdateLink>
          <UpdateLink
            href="https://store.steampowered.com/news/app/488860/view/4488495001178735689"
            target="_blank"
          >
            <UpdateItemContainer>
              <img
                className="coner-1"
                src="./assets/corners_White/cornerBottomLeft_Lg.png"
                alt=""
              />
              <img
                className="coner-2"
                src="./assets/corners_White/cornerTopLeft_Lg.png"
                alt=""
              />
              <img
                className="coner-3"
                src="./assets/corners_White/cornerBottomRight_Lg.png"
                alt=""
              />
              <img
                className="coner-4"
                src="./assets/corners_White/cornerTopRight_Lg.png"
                alt=""
              />
              <ItemTextWrapper>
                <h4>Phobos + Hot Dog Vendor Plushie!</h4>
                <p>
                  A transdimensional megalomaniac and a perennial enigma. A
                  God-Emperor and a God of Glizzies. The forces of Nevada often
                  manifest themselves in extremely varied and unforeseen ways,
                  and there are few incarnations more enduring than that of the
                  self-proclaimed 'God-Emperor' himself Director Phobos, and the
                  utterly inexplicable Hot Dog Vendor.
                </p>
              </ItemTextWrapper>
              <ImageContainer>
                <Image src="./images/updates/update2.webp" alt="" />
              </ImageContainer>
            </UpdateItemContainer>
          </UpdateLink>
        </UpdatesWrapper>
        <UpdatesWrapper>
          <UpdateLink
            href="https://store.steampowered.com/news/app/488860/view/579383283382485029"
            target="_blank"
          >
            <UpdateItemContainer>
              <img
                className="coner-1"
                src="./assets/corners_White/cornerBottomLeft_Lg.png"
                alt=""
              />
              <img
                className="coner-2"
                src="./assets/corners_White/cornerTopLeft_Lg.png"
                alt=""
              />
              <img
                className="coner-3"
                src="./assets/corners_White/cornerBottomRight_Lg.png"
                alt=""
              />
              <img
                className="coner-4"
                src="./assets/corners_White/cornerTopRight_Lg.png"
                alt=""
              />
              <ItemTextWrapper>
                <h4>CHURCH + JORGE PLUSHIES & CUSTOM CAMPAIGNS!!!</h4>
                <p>
                  We tried making PINS but it WASN'T GOOD ENOUGH! NOW THE BOYS
                  ARE MARKETABLE and can TAKE A PUNCH! You can PAY THEM to COME
                  TO YOUR HOUSE and STAND GUARD or be on TEA PARTY DUTY! They
                  will BAG THEMSELVES and go ANYWHERE IN THE WORLD for CHEAP!
                </p>
              </ItemTextWrapper>
              <ImageContainer>
                <Image src="./images/updates/update3.webp" alt="" />
              </ImageContainer>
            </UpdateItemContainer>
          </UpdateLink>
          <UpdateLink
            href="https://store.steampowered.com/news/app/488860/view/544470329026675249"
            target="_blank"
          >
            <UpdateItemContainer>
              <img
                className="coner-1"
                src="./assets/corners_White/cornerBottomLeft_Lg.png"
                alt=""
              />
              <img
                className="coner-2"
                src="./assets/corners_White/cornerTopLeft_Lg.png"
                alt=""
              />
              <img
                className="coner-3"
                src="./assets/corners_White/cornerBottomRight_Lg.png"
                alt=""
              />
              <img
                className="coner-4"
                src="./assets/corners_White/cornerTopRight_Lg.png"
                alt=""
              />
              <ItemTextWrapper>
                <h4>Sharkrobot merch drop and Project Nexus sitrep!</h4>
                <p>
                  Hey there folks! We've got a MASSIVE merch drop today from
                  Sharkrobot, alongside another update on the state of mod
                  development for Project Nexus. There's a heckuva lot going on
                  on both fronts, so let's get right into it.
                </p>
              </ItemTextWrapper>
              <ImageContainer>
                <Image src="./images/updates/update4.webp" alt="" />
              </ImageContainer>
            </UpdateItemContainer>
          </UpdateLink>
          <Link
            href="https://store.steampowered.com/news/app/488860"
            target="_blank"
          >
            VIEW MORE
            <HoverEffet>
              <span />
              <span />
              <span />
            </HoverEffet>
          </Link>
        </UpdatesWrapper>
      </UpdatesContainer>
      <WhiteDividerRight />
    </WhiteBackground>
  );
}
