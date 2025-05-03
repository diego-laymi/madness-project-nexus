import {
  HoverEffet,
  Image,
  ImageContainer,
  ItemTextWrapper,
  Link,
  MainLink,
  Title,
  UpdateItemContainer,
  UpdatesContainer,
  UpdatesWrapper,
} from "./styles";

export function Updates() {
  return (
    <UpdatesContainer>
      <UpdatesWrapper>
        <Title>NEWS & UPATES</Title>
        <Link
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
              <h4>Limited Edition Jeb Plushie + Pin & Project Nexus Sitrep!</h4>
              <p>
                Makeship has blessed us once again with another merch drop of
                biblical proportions! This time around it's the OTHER good
                (allegedly) doctor (allegedly) Jebediah Christoff who's graced
                us with his presence, both in plushie AND enamel pin form!
              </p>
            </ItemTextWrapper>
            <ImageContainer>
              <Image src="https://clan.fastly.steamstatic.com/images/25485323/5a397f7db2f8ace699c46cf7b0565a1a2fa65d2b_400x225.png" />
            </ImageContainer>
          </UpdateItemContainer>
        </Link>
        <Link
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
              <h4>
                Limited Edition Boombox Man Vinyl Figure and enamel pin
                available NOW!!!
              </h4>
              <p>
                Hey there folks! Things are still chugging along with the Scene
                Tools over at HQ. Our current objective is getting the Event
                system ported to a workable format (.JSON) in order to enable
                custom scripted events in your stages (Think interactables,
                custom cameras, objectives, cutscenes, etc. Anything beyond raw
                go-in-room-kill-stuff gameplay.) We’re plugging away to get that
                to y’all in a stable state ASAP but in the meantime, Makeship’s
                struck again with some sweet merch and this time it’s a little
                different.
              </p>
            </ItemTextWrapper>
            <ImageContainer>
              <Image src="https://clan.fastly.steamstatic.com/images/25485323/da50702d8c229b742885b38f4aeecff2d8ba2a83_400x225.png" />
            </ImageContainer>
          </UpdateItemContainer>
        </Link>
      </UpdatesWrapper>
      <UpdatesWrapper>
        <Link
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
              <h4>Sheriff Plushie & Church + Jorge Pins!</h4>
              <p>
                Well looky here! If it ain't our old pal the Sheriff! And his
                two favorite knuckleheads as well!
              </p>
            </ItemTextWrapper>
            <ImageContainer>
              <Image src="https://clan.fastly.steamstatic.com/images/25485323/9b6ea1d9de3a5cc7d504c1477c82e3a0753ec921_960x311.png" />
            </ImageContainer>
          </UpdateItemContainer>
        </Link>
        <Link
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
              <h4>Full Release [1.08.e] Update</h4>
              <p>
                The release branch is up to date with all beta updates EXCEPT
                FOR MODDING! As always, let us know if you see any issues with
                the new updates, or anything else you spot!
              </p>
            </ItemTextWrapper>
            <ImageContainer>
              <Image src="https://clan.fastly.steamstatic.com/images/25485323/9551a44503c986f61878b1c197a5142bafb8617e_400x225.png" />
            </ImageContainer>
          </UpdateItemContainer>
        </Link>
        <MainLink
          href="https://store.steampowered.com/news/app/488860"
          target="_blank"
        >
          VIEW MORE
          <HoverEffet>
            <span />
            <span />
            <span />
          </HoverEffet>
        </MainLink>
      </UpdatesWrapper>
    </UpdatesContainer>
  );
}
