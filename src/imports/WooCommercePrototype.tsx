import clsx from "clsx";
import svgPaths from "./svg-8j9pzhibtb";
import imgImageWithFallback from "figma:asset/470003b61376079559f130275bb01311bacd79af.png";
import imgImageWithFallback1 from "figma:asset/f199cc33707917c80c8a487f018e4be0adaa2d5d.png";
import imgImageWithFallback2 from "figma:asset/3cf3079aa7682081e360674f3b9f5574a320c9a7.png";
import imgImageWithFallback3 from "figma:asset/7b2aa8564892e85b5342acacc9d805453d5e2c4f.png";
import imgImageWithFallback4 from "figma:asset/1a333eaffeda9dbd7961fc6d27659777ef0ecc28.png";
import imgImageWithFallback5 from "figma:asset/ee839a047d450a2ce771b7926d5e5889e7888df3.png";
import imgImageWithFallback6 from "figma:asset/996e718b426fcecb721c3c7d66aaec12ee9335d5.png";
import imgImageWithFallback7 from "figma:asset/edfc144193a7ca77fcaff925c3487eef2d654a16.png";
import imgImageWithFallback8 from "figma:asset/cb1c2316ea963ac435991723bd90223cbbbfdafd.png";
import imgImageWithFallback9 from "figma:asset/6fdbb17bf2a07622279591ffb50fad6cbfb4e643.png";

function LinkBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[35.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#60a5fa] text-[16px] top-[-3px] tracking-[-0.3125px] whitespace-nowrap">{children}</p>
      <BackgroundImage5 additionalClassNames="top-[21.5px]">
        <g id="ChevronDown">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </BackgroundImage5>
    </div>
  );
}
type ProductCardBackgroundImageProps = {
  additionalClassNames?: string;
};

function ProductCardBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ProductCardBackgroundImageProps>) {
  return (
    <div className={clsx("relative rounded-[8px] shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type BackgroundImage7Props = {
  additionalClassNames?: string;
};

function BackgroundImage7({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage7Props>) {
  return (
    <div className={clsx("relative w-[410px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#60a5fa] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">{children}</p>
    </div>
  );
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage5Props>) {
  return (
    <div className={clsx("absolute left-0 size-[14px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[24px] top-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function IconBackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[20px] top-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function VectorBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[8.33%]">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          {children}
        </svg>
      </div>
    </div>
  );
}

function VectorBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[12.5%]">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          {children}
        </svg>
      </div>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("absolute left-0 size-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[18px] top-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage4>
      <g id="Icon">{children}</g>
    </BackgroundImage4>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.24%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8344 12.292">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconBackgroundImage4() {
  return (
    <BackgroundImage1>
      <path d={svgPaths.p311be280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M3 6H21" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p8aac400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </BackgroundImage1>
  );
}

function Icon77BackgroundImage() {
  return (
    <div className="absolute inset-[-9999.77%_-1px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2.01">
        <path d="M1 1V1.01" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphBackgroundImageAndText({ text, additionalClassNames = "" }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] w-[412px]">{text}</p>
    </div>
  );
}

function ImageWithFallbackBackgroundImage2() {
  return (
    <div className="absolute h-[615px] left-0 top-0 w-[410px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback7} />
    </div>
  );
}

function ImageWithFallbackBackgroundImage1() {
  return (
    <div className="absolute h-[272.438px] left-0 top-0 w-[409.984px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
    </div>
  );
}
type ContainerBackgroundImageProps = {
  text: string;
  text1: string;
};

function ContainerBackgroundImage({ text, text1 }: ContainerBackgroundImageProps) {
  return (
    <div className="absolute h-[24px] left-0 top-[118px] w-[410px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[0px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">
        <span className="leading-[24px] text-[16px]">{text}</span>
        <span className="leading-[19.2px] text-[12.8px] tracking-[-0.06px]">{text1}</span>
      </p>
    </div>
  );
}
type ProductCardBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ProductCardBackgroundImageAndText1({ text, additionalClassNames = "" }: ProductCardBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute h-[24px] left-0 w-[410px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#60a5fa] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function ImageWithFallbackBackgroundImage() {
  return (
    <div className="absolute h-[273.328px] left-0 top-0 w-[409.992px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
    </div>
  );
}
type ProductCardBackgroundImageAndTextProps = {
  text: string;
};

function ProductCardBackgroundImageAndText({ text }: ProductCardBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[39.5px] left-0 top-0 w-[83.023px]">
      <BackgroundImage2>
        <path d={svgPaths.p1d69e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p1150d400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M5.25 15.75H12.75" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M9 2.25V15.75" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.pc9a7e80} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </BackgroundImage2>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[42.5px] not-italic text-[16px] text-center text-white top-[17.5px] tracking-[-0.3125px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return (
    <div className="absolute h-[94px] left-0 top-0 w-[410px]">
      <div className="absolute content-stretch flex flex-col h-[70px] items-start left-0 pr-[396px] top-0 w-[410px]">
        <IconBackgroundImage3 />
        <IconBackgroundImage3 />
        <IconBackgroundImage3 />
        <IconBackgroundImage3 />
        <BackgroundImage>
          <path d={svgPaths.p25c68640} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </BackgroundImage>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] left-0 not-italic text-[12.8px] text-white top-[72.5px] tracking-[-0.06px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function IconBackgroundImage3() {
  return (
    <BackgroundImage>
      <path d={svgPaths.p25c68640} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
    </BackgroundImage>
  );
}

function IconBackgroundImage2() {
  return (
    <BackgroundImage2>
      <path d={svgPaths.pac54200} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </BackgroundImage2>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage2>
      <path d={svgPaths.p288ca880} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </BackgroundImage2>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage3 additionalClassNames="top-0">
      <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </BackgroundImage3>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="h-[40px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] left-0 not-italic text-[#60a5fa] text-[12.8px] top-[2.5px] tracking-[-0.06px] whitespace-nowrap">{text}</p>
      <BackgroundImage3 additionalClassNames="top-[24px]">
        <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </BackgroundImage3>
    </div>
  );
}

function HorizontalRuleBackgroundImage() {
  return (
    <div className="h-px relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
    </div>
  );
}
type BackgroundImageAndText5Props = {
  text: string;
};

function BackgroundImageAndText5({ text }: BackgroundImageAndText5Props) {
  return (
    <div className="absolute h-[24px] left-0 top-[48px] w-[412px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] left-0 not-italic text-[#60a5fa] text-[12.8px] top-[2.5px] tracking-[-0.06px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText4Props = {
  text: string;
};

function BackgroundImageAndText4({ text }: BackgroundImageAndText4Props) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] left-0 not-italic text-[#60a5fa] text-[12.8px] top-[2.5px] tracking-[-0.06px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type Icon2VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Icon2VectorBackgroundImage({ additionalClassNames = "" }: Icon2VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <path d={svgPaths.pafef4f0} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return <BackgroundImage6>{text}</BackgroundImage6>;
}
type BackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText2({ text, additionalClassNames = "" }: BackgroundImageAndText2Props) {
  return (
    <div className={clsx("absolute h-[24px] left-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#60a5fa] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute h-[24px] left-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function WooCommercePrototype() {
  return (
    <div className="bg-white relative size-full" data-name="WooCommerce Prototype">
      <div className="absolute h-[9169.188px] left-0 top-0 w-[412px]" data-name="Layout">
        <div className="absolute left-0 size-[24px] top-0" data-name="button">
          <BackgroundImage4>
            <g id="ArrowUp">
              <path d="M5 12L12 5L19 12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M12 19V5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </BackgroundImage4>
        </div>
        <div className="absolute content-stretch flex flex-col h-[8890.188px] items-start left-0 top-[95px] w-[412px]" data-name="FrontPage">
          <div className="content-stretch flex flex-col h-[804px] items-start relative shrink-0 w-full" data-name="Section">
            <div className="h-[618px] relative shrink-0 w-full" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
            </div>
            <div className="h-0 shrink-0 w-full" data-name="Container" />
            <div className="h-0 shrink-0 w-full" data-name="Container" />
            <div className="h-0 shrink-0 w-full" data-name="Container" />
            <div className="h-0 shrink-0 w-full" data-name="Container" />
            <div className="h-[158px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute h-[35.5px] left-0 top-0 w-[412px]" data-name="Text">
                <BackgroundImage5 additionalClassNames="top-0">
                  <g clipPath="url(#clip0_3521_2144)" id="Icon">
                    <path d={svgPaths.p115b3700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d="M11.6667 1.75V4.08333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d="M12.8333 2.91667H10.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d="M2.33333 9.91667V11.0833" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d="M2.91667 10.5H1.75" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3521_2144">
                      <rect fill="white" height="14" width="14" />
                    </clipPath>
                  </defs>
                </BackgroundImage5>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[13.5px] tracking-[-0.3125px] whitespace-nowrap">New collection</p>
              </div>
              <BackgroundImageAndText1 text="Curated living, delivered to your door" additionalClassNames="top-[38px] w-[412px]" />
              <div className="absolute h-[72px] left-0 top-[62px] w-[412px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] w-[398px]">Discover our curated collection of stationery, homewares, and lifestyle essentials - crafted with care, shipped sustainably.</p>
              </div>
              <BackgroundImageAndText2 text="Explore the collectionNew arrivals" additionalClassNames="top-[134px] w-[412px]" />
            </div>
            <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col items-start pr-[384px] relative size-full">
                <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                    <div className="absolute inset-[-16.67%_-8.33%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3333 9.33333">
                        <path d={svgPaths.p106ab7c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[288px] items-start relative shrink-0 w-full" data-name="QuickEntryTilesGrid">
            <div className="h-[72px] relative shrink-0 w-full" data-name="Link">
              <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 pr-[388px] top-0 w-[412px]" data-name="QuickEntryTilesGrid">
                <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute bottom-1/4 left-[8.33%] right-[41.67%] top-[16.67%]" data-name="Vector">
                    <div className="absolute inset-[-7.14%_-8.33%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
                        <path d={svgPaths.p2089aa00} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-3/4" data-name="Vector">
                    <div className="absolute inset-[-1px_-16.67%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
                        <path d="M7 1H1" id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 left-[58.33%] right-[8.33%] top-[33.33%]" data-name="Vector">
                    <div className="absolute inset-[-10%_-12.5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                        <path d={svgPaths.p25587a00} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <Icon2VectorBackgroundImage additionalClassNames="inset-[66.67%_20.83%_16.67%_62.5%]" />
                  <Icon2VectorBackgroundImage additionalClassNames="inset-[66.67%_62.5%_16.67%_20.83%]" />
                </div>
              </div>
              <BackgroundImageAndText2 text="Free shipping" additionalClassNames="top-[24px] w-[412px]" />
              <BackgroundImageAndText5 text="On orders over GBP 50" />
            </div>
            <div className="h-[72px] relative shrink-0 w-full" data-name="Link">
              <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 pr-[388px] top-0 w-[412px]" data-name="QuickEntryTilesGrid">
                <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <VectorBackgroundImage>
                    <path d={svgPaths.p15a59300} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </VectorBackgroundImage>
                  <div className="absolute inset-[12.5%_66.67%_66.67%_12.5%]" data-name="Vector">
                    <div className="absolute inset-[-20%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                        <path d="M1 1V6H6" id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <BackgroundImageAndText2 text="Easy returns" additionalClassNames="top-[24px] w-[412px]" />
              <BackgroundImageAndText5 text="30-day return window" />
            </div>
            <div className="h-[72px] relative shrink-0 w-full" data-name="Link">
              <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 pr-[388px] top-0 w-[412px]" data-name="QuickEntryTilesGrid">
                <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
                    <div className="absolute inset-[-5%_-6.25%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22.0034">
                        <path d={svgPaths.p27979bf0} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <BackgroundImageAndText2 text="Secure checkout" additionalClassNames="top-[24px] w-[412px]" />
              <BackgroundImageAndText5 text="100% payment protection" />
            </div>
            <div className="h-[72px] relative shrink-0 w-full" data-name="Link">
              <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 pr-[388px] top-0 w-[412px]" data-name="QuickEntryTilesGrid">
                <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <VectorBackgroundImage>
                    <path d={svgPaths.p38b14480} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </VectorBackgroundImage>
                </div>
              </div>
              <BackgroundImageAndText2 text="Friendly support" additionalClassNames="top-[24px] w-[412px]" />
              <BackgroundImageAndText5 text="Real humans, real help" />
            </div>
          </div>
          <HorizontalRuleBackgroundImage />
          <div className="content-stretch flex flex-col h-[2070.492px] items-start relative shrink-0 w-full" data-name="Section">
            <BackgroundImageAndText text="Shop by category" />
            <div className="h-[2046.492px] relative shrink-0 w-full" data-name="Grid">
              <div className="absolute content-stretch flex flex-col h-[730px] items-start left-0 top-0 w-[412px]" data-name="Link">
                <div className="h-[618px] relative shrink-0 w-full" data-name="ImageWithFallback">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
                </div>
                <div className="content-stretch flex flex-col h-[112px] items-start relative shrink-0 w-full" data-name="CategoryShowcaseGrid">
                  <BackgroundImageAndText3 text="Stationery" />
                  <BackgroundImage6>{`Notebooks, pens & paper goods`}</BackgroundImage6>
                  <BackgroundImageAndText4 text="186 Products" />
                  <ContainerBackgroundImageAndText text="Shop Now" />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col h-[386.492px] items-start left-0 pr-[0.008px] top-[730px] w-[412px]" data-name="Link">
                <div className="h-[274.492px] relative shrink-0 w-full" data-name="ImageWithFallback">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
                </div>
                <div className="content-stretch flex flex-col h-[112px] items-start relative shrink-0 w-full" data-name="CategoryShowcaseGrid">
                  <BackgroundImage6>{`Desk & office`}</BackgroundImage6>
                  <BackgroundImage6>{`Organisers, accessories & tools`}</BackgroundImage6>
                  <BackgroundImageAndText4 text="124 Products" />
                  <ContainerBackgroundImageAndText text="Shop Now" />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col h-[730px] items-start left-0 top-[1116.49px] w-[412px]" data-name="Link">
                <div className="h-[618px] relative shrink-0 w-full" data-name="ImageWithFallback">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
                </div>
                <div className="content-stretch flex flex-col h-[112px] items-start relative shrink-0 w-full" data-name="CategoryShowcaseGrid">
                  <BackgroundImage6>{`Home & living`}</BackgroundImage6>
                  <BackgroundImage6>{`Candles, prints & homewares`}</BackgroundImage6>
                  <BackgroundImageAndText4 text="97 Products" />
                  <ContainerBackgroundImageAndText text="Shop Now" />
                </div>
              </div>
              <div className="absolute h-[200px] left-0 top-[1846.49px] w-[412px]" data-name="Link">
                <div className="absolute left-0 size-[88px] top-0" data-name="ImageWithFallback">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                    <g id="ImageWithFallback">
                      <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
                      <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
                      <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" />
                    </g>
                  </svg>
                </div>
                <div className="absolute content-stretch flex flex-col h-[112px] items-start left-0 top-[88px] w-[412px]" data-name="CategoryShowcaseGrid">
                  <BackgroundImage6>{`Gifts & wrapping`}</BackgroundImage6>
                  <BackgroundImageAndText3 text="Thoughtful gifts for every occasion" />
                  <BackgroundImageAndText4 text="142 Products" />
                  <ContainerBackgroundImageAndText text="Shop Now" />
                </div>
              </div>
            </div>
          </div>
          <HorizontalRuleBackgroundImage />
          <div className="content-stretch flex flex-col h-[2438.602px] items-start relative shrink-0 w-full" data-name="Section">
            <div className="content-stretch flex flex-col gap-[2.5px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
                <BackgroundImageAndText text="Trending now" />
                <BackgroundImageAndText text="The most popular picks this week" />
              </div>
              <div className="h-[37.5px] relative shrink-0 w-full" data-name="Link">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#60a5fa] text-[16px] top-[-3px] tracking-[-0.3125px] whitespace-nowrap">View all</p>
                <div className="absolute h-[16px] left-0 top-[21.5px] w-[412px]" data-name="Button">
                  <IconBackgroundImage />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[2350.602px] items-start relative shrink-0 w-full" data-name="ProductGrid">
              <ProductCardBackgroundImage additionalClassNames="h-[511.836px]">
                <BackgroundImage7 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <div className="absolute h-[301.836px] left-0 top-0 w-[409.992px]" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
                  </div>
                  <div className="absolute h-0 left-0 top-[301.84px] w-[410px]" data-name="ProductCard2" />
                  <div className="absolute left-0 size-[18px] top-[301.84px]" data-name="ProductCard2">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute left-[18px] size-[18px] top-[301.84px]" data-name="ProductCard2">
                    <IconBackgroundImage2 />
                  </div>
                </BackgroundImage7>
                <BackgroundImage7 additionalClassNames="h-[184px] shrink-0">
                  <ContainerBackgroundImageAndText1 text="(89)" />
                  <BackgroundImageAndText2 text="Fitness smartwatch Pro" additionalClassNames="top-[94px] w-[410px]" />
                  <BackgroundImageAndText1 text="£249.00" additionalClassNames="top-[118px] w-[410px]" />
                  <div className="absolute h-[42px] left-0 top-[142px] w-[83.023px]" data-name="Button">
                    <ProductCardBackgroundImageAndText text="Add to Cart" />
                  </div>
                </BackgroundImage7>
              </ProductCardBackgroundImage>
              <ProductCardBackgroundImage additionalClassNames="h-[507.328px]">
                <BackgroundImage7 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <ImageWithFallbackBackgroundImage />
                  <ProductCardBackgroundImageAndText1 text="SALE" additionalClassNames="top-[273.33px]" />
                  <div className="absolute left-0 size-[18px] top-[297.33px]" data-name="ProductCard2">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute left-[18px] size-[18px] top-[297.33px]" data-name="ProductCard2">
                    <IconBackgroundImage2 />
                  </div>
                </BackgroundImage7>
                <BackgroundImage7 additionalClassNames="h-[184px] shrink-0">
                  <ContainerBackgroundImageAndText1 text="(124)" />
                  <BackgroundImageAndText2 text="Premium wireless headphones" additionalClassNames="top-[94px] w-[410px]" />
                  <ContainerBackgroundImage text="£119.99" text1="£149.99" />
                  <div className="absolute h-[42px] left-0 top-[142px] w-[83.023px]" data-name="Button">
                    <ProductCardBackgroundImageAndText text="Add to Cart" />
                  </div>
                </BackgroundImage7>
              </ProductCardBackgroundImage>
              <ProductCardBackgroundImage additionalClassNames="h-[506.438px]">
                <BackgroundImage7 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <ImageWithFallbackBackgroundImage1 />
                  <ProductCardBackgroundImageAndText1 text="SALE" additionalClassNames="top-[272.44px]" />
                  <div className="absolute left-0 size-[18px] top-[296.44px]" data-name="ProductCard2">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute left-[18px] size-[18px] top-[296.44px]" data-name="ProductCard2">
                    <IconBackgroundImage2 />
                  </div>
                </BackgroundImage7>
                <BackgroundImage7 additionalClassNames="h-[184px] shrink-0">
                  <ContainerBackgroundImageAndText1 text="(64)" />
                  <BackgroundImageAndText2 text="Leather crossbody bag" additionalClassNames="top-[94px] w-[410px]" />
                  <ContainerBackgroundImage text="£159.00" text1="£189.00" />
                  <div className="absolute h-[42px] left-0 top-[142px] w-[83.023px]" data-name="Button">
                    <ProductCardBackgroundImageAndText text="Add to Cart" />
                  </div>
                </BackgroundImage7>
              </ProductCardBackgroundImage>
              <ProductCardBackgroundImage additionalClassNames="h-[825px]">
                <BackgroundImage7 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <ImageWithFallbackBackgroundImage2 />
                  <div className="absolute h-0 left-0 top-[615px] w-[410px]" data-name="ProductCard2" />
                  <div className="absolute left-0 size-[18px] top-[615px]" data-name="ProductCard2">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute left-[18px] size-[18px] top-[615px]" data-name="ProductCard2">
                    <IconBackgroundImage2 />
                  </div>
                </BackgroundImage7>
                <BackgroundImage7 additionalClassNames="h-[184px] shrink-0">
                  <ContainerBackgroundImageAndText1 text="(215)" />
                  <BackgroundImageAndText2 text="Organic cotton T-shirt" additionalClassNames="top-[94px] w-[410px]" />
                  <BackgroundImageAndText1 text="£39.00" additionalClassNames="top-[118px] w-[410px]" />
                  <div className="absolute h-[42px] left-0 top-[142px] w-[83.023px]" data-name="Button">
                    <ProductCardBackgroundImageAndText text="Add to Cart" />
                  </div>
                </BackgroundImage7>
              </ProductCardBackgroundImage>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[738px] items-start relative shrink-0 w-full" data-name="Section">
            <div className="h-[618px] relative shrink-0 w-full" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback8} />
            </div>
            <div className="h-0 shrink-0 w-full" data-name="Container" />
            <div className="h-0 shrink-0 w-full" data-name="Container" />
            <div className="h-0 shrink-0 w-full" data-name="Container" />
            <div className="content-stretch flex flex-col h-[120px] items-start relative shrink-0 w-full" data-name="Container">
              <BackgroundImageAndText text="Crafted with care, built to last" />
              <ParagraphBackgroundImageAndText text="Every item in our collection is thoughtfully curated, ethically sourced, and designed to stand the test of time. We believe quality should be accessible to everyone." additionalClassNames="h-[72px]" />
              <BackgroundImageAndText3 text="Our story" />
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[2410.094px] items-start relative shrink-0 w-full" data-name="Section">
            <div className="content-stretch flex flex-col gap-[2.5px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
                <BackgroundImageAndText text="Best sellers" />
                <BackgroundImageAndText text="Customer favourites, tried and loved" />
              </div>
              <div className="h-[37.5px] relative shrink-0 w-full" data-name="Link">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#60a5fa] text-[16px] top-[-3px] tracking-[-0.3125px] whitespace-nowrap">View all</p>
                <div className="absolute h-[16px] left-0 top-[21.5px] w-[412px]" data-name="Button">
                  <IconBackgroundImage />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[2322.094px] items-start relative shrink-0 w-full" data-name="ProductGrid">
              <ProductCardBackgroundImage additionalClassNames="h-[825px]">
                <BackgroundImage7 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <ImageWithFallbackBackgroundImage2 />
                  <div className="absolute h-0 left-0 top-[615px] w-[410px]" data-name="ProductCard2" />
                  <div className="absolute left-0 size-[18px] top-[615px]" data-name="ProductCard2">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute left-[18px] size-[18px] top-[615px]" data-name="ProductCard2">
                    <IconBackgroundImage2 />
                  </div>
                </BackgroundImage7>
                <BackgroundImage7 additionalClassNames="h-[184px] shrink-0">
                  <ContainerBackgroundImageAndText1 text="(215)" />
                  <BackgroundImageAndText2 text="Organic cotton T-shirt" additionalClassNames="top-[94px] w-[410px]" />
                  <BackgroundImageAndText1 text="£39.00" additionalClassNames="top-[118px] w-[410px]" />
                  <div className="absolute h-[42px] left-0 top-[142px] w-[83.023px]" data-name="Button">
                    <ProductCardBackgroundImageAndText text="Add to Cart" />
                  </div>
                </BackgroundImage7>
              </ProductCardBackgroundImage>
              <ProductCardBackgroundImage additionalClassNames="h-[483.328px]">
                <BackgroundImage7 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <div className="absolute h-[273.328px] left-0 top-0 w-[409.992px]" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback9} />
                  </div>
                  <div className="absolute h-0 left-0 top-[273.33px] w-[410px]" data-name="ProductCard2" />
                  <div className="absolute left-0 size-[18px] top-[273.33px]" data-name="ProductCard2">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute left-[18px] size-[18px] top-[273.33px]" data-name="ProductCard2">
                    <IconBackgroundImage2 />
                  </div>
                </BackgroundImage7>
                <BackgroundImage7 additionalClassNames="h-[184px] shrink-0">
                  <ContainerBackgroundImageAndText1 text="(67)" />
                  <BackgroundImageAndText2 text="Handcrafted ceramic mug" additionalClassNames="top-[94px] w-[410px]" />
                  <BackgroundImageAndText1 text="£28.00" additionalClassNames="top-[118px] w-[410px]" />
                  <div className="absolute h-[42px] left-0 top-[142px] w-[83.023px]" data-name="Button">
                    <ProductCardBackgroundImageAndText text="Add to Cart" />
                  </div>
                </BackgroundImage7>
              </ProductCardBackgroundImage>
              <ProductCardBackgroundImage additionalClassNames="h-[507.328px]">
                <BackgroundImage7 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <ImageWithFallbackBackgroundImage />
                  <ProductCardBackgroundImageAndText1 text="SALE" additionalClassNames="top-[273.33px]" />
                  <div className="absolute left-0 size-[18px] top-[297.33px]" data-name="ProductCard2">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute left-[18px] size-[18px] top-[297.33px]" data-name="ProductCard2">
                    <IconBackgroundImage2 />
                  </div>
                </BackgroundImage7>
                <BackgroundImage7 additionalClassNames="h-[184px] shrink-0">
                  <ContainerBackgroundImageAndText1 text="(124)" />
                  <BackgroundImageAndText2 text="Premium wireless headphones" additionalClassNames="top-[94px] w-[410px]" />
                  <ContainerBackgroundImage text="£119.99" text1="£149.99" />
                  <div className="absolute h-[42px] left-0 top-[142px] w-[83.023px]" data-name="Button">
                    <ProductCardBackgroundImageAndText text="Add to Cart" />
                  </div>
                </BackgroundImage7>
              </ProductCardBackgroundImage>
              <ProductCardBackgroundImage additionalClassNames="h-[506.438px]">
                <BackgroundImage7 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <ImageWithFallbackBackgroundImage1 />
                  <ProductCardBackgroundImageAndText1 text="SALE" additionalClassNames="top-[272.44px]" />
                  <div className="absolute left-0 size-[18px] top-[296.44px]" data-name="ProductCard2">
                    <IconBackgroundImage1 />
                  </div>
                  <div className="absolute left-[18px] size-[18px] top-[296.44px]" data-name="ProductCard2">
                    <IconBackgroundImage2 />
                  </div>
                </BackgroundImage7>
                <BackgroundImage7 additionalClassNames="h-[184px] shrink-0">
                  <ContainerBackgroundImageAndText1 text="(64)" />
                  <BackgroundImageAndText2 text="Leather crossbody bag" additionalClassNames="top-[94px] w-[410px]" />
                  <ContainerBackgroundImage text="£159.00" text1="£189.00" />
                  <div className="absolute h-[42px] left-0 top-[142px] w-[83.023px]" data-name="Button">
                    <ProductCardBackgroundImageAndText text="Add to Cart" />
                  </div>
                </BackgroundImage7>
              </ProductCardBackgroundImage>
            </div>
          </div>
          <HorizontalRuleBackgroundImage />
          <div className="content-stretch flex flex-col h-[138px] items-start relative shrink-0 w-full" data-name="Section">
            <div className="h-0 shrink-0 w-full" data-name="Container" />
            <div className="h-0 shrink-0 w-full" data-name="Container" />
            <div className="content-stretch flex flex-col h-[138px] items-start relative shrink-0 w-full" data-name="Container">
              <BackgroundImageAndText text="Join the Woo Shop community" />
              <ParagraphBackgroundImageAndText text="Subscribe for early access to new arrivals, maker stories, and an exclusive 10% off your first order." additionalClassNames="h-[48px]" />
              <div className="h-[66px] relative shrink-0 w-full" data-name="NewsletterSignup">
                <div className="absolute h-[42px] left-0 top-0 w-[412px]" data-name="Container">
                  <div className="absolute content-stretch flex flex-col h-[18px] items-start left-0 pr-[394px] top-0 w-[412px]" data-name="Container">
                    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
                        <div className="absolute inset-[-6.25%_-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 13.5">
                            <path d={svgPaths.pdc4ad80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
                        <div className="absolute inset-[-16.68%_-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5002 5.9971">
                            <path d={svgPaths.p38627300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#1a1a1a] content-stretch flex h-[24px] items-center left-0 overflow-clip top-[18px] w-[177px]" data-name="Email Input">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(249,250,251,0.5)] tracking-[-0.3125px] whitespace-nowrap">Your email address</p>
                  </div>
                </div>
                <div className="absolute h-[24px] left-0 top-[42px] w-[72.891px]" data-name="Button">
                  <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[36px] not-italic text-[16px] text-center text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Subscribe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[184px] items-start left-0 top-[8985.19px] w-[412px]" data-name="CookieConsent">
          <div className="content-stretch flex flex-col h-[144px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col items-start pr-[388px] relative size-full">
                <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <VectorBackgroundImage1>
                    <path d={svgPaths.p10649300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </VectorBackgroundImage1>
                  <div className="absolute inset-[35.42%_64.58%_64.54%_35.42%]" data-name="Vector">
                    <Icon77BackgroundImage />
                  </div>
                  <div className="absolute inset-[64.58%_33.33%_35.37%_66.67%]" data-name="Vector">
                    <Icon77BackgroundImage />
                  </div>
                  <div className="absolute bottom-[49.96%] left-1/2 right-1/2 top-1/2" data-name="Vector">
                    <Icon77BackgroundImage />
                  </div>
                  <div className="absolute inset-[70.83%_54.17%_29.12%_45.83%]" data-name="Vector">
                    <Icon77BackgroundImage />
                  </div>
                  <div className="absolute inset-[58.33%_70.83%_41.62%_29.17%]" data-name="Vector">
                    <Icon77BackgroundImage />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[120px] items-start relative shrink-0 w-full" data-name="Container">
              <BackgroundImageAndText text="We Use Cookies" />
              <div className="h-[96px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] w-[402px]">
                  <span className="leading-[24px]">{`We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. `}</span>
                  <span className="leading-[24px] text-[#60a5fa]">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
          <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[40px] left-0 top-0 w-[76.828px]" data-name="Button">
              <BackgroundImage3 additionalClassNames="top-0">
                <path d={svgPaths.p2338cf00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </BackgroundImage3>
              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[38px] not-italic text-[16px] text-center text-white top-[15.5px] tracking-[-0.3125px] whitespace-nowrap">Customize</p>
            </div>
            <div className="absolute h-[24px] left-[76.83px] top-[16px] w-[67.617px]" data-name="Button">
              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34px] not-italic text-[16px] text-center text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Reject All</p>
            </div>
            <div className="absolute h-[24px] left-[144.45px] top-[16px] w-[73.188px]" data-name="Button">
              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[37px] not-italic text-[16px] text-center text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Accept All</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#00a63e] content-stretch flex flex-col items-start left-[340px] pt-[16px] px-[16px] rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[678px]" data-name="PerformanceMonitor">
        <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
          <VectorBackgroundImage1>
            <path d={svgPaths.p37fb2640} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </VectorBackgroundImage1>
        </div>
      </div>
      <div className="absolute bg-[#155dfc] content-stretch flex flex-col items-start left-[340px] pt-[16px] px-[16px] rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[56px] top-[742px]" data-name="AccessibilityChecker">
        <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
          <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-7.14%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.001 15.9988">
                <path d={svgPaths.p1afd0ab0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[37.5%]" data-name="Vector">
            <div className="absolute inset-[-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <path d={svgPaths.p1e531d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0f0f0f] content-stretch flex flex-col h-[65px] items-start left-0 pb-px top-[30px] w-[412px]" data-name="MainHeader">
        <div aria-hidden="true" className="absolute border-[#374151] border-b border-solid inset-0 pointer-events-none" />
        <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
              <div className="h-[101.656px] relative shrink-0 w-[28px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <div className="absolute left-0 size-[28px] top-0" data-name="Button">
                    <div className="absolute left-0 size-[28px] top-0" data-name="Icon">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                        <g id="Icon">
                          <path d="M4.66667 14H23.3333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d="M4.66667 7H23.3333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d="M4.66667 21H23.3333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[7.656px] left-0 top-[34px] w-[28px]" data-name="Link">
                    <div className="absolute h-[7.656px] left-0 top-0 w-[27.969px]" data-name="Logo">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9688 7.65625">
                        <g clipPath="url(#clip0_3521_2104)" id="Logo">
                          <path d={svgPaths.p385f520} fill="var(--fill-0, #60A5FA)" id="Vector" />
                          <path clipRule="evenodd" d={svgPaths.p34207170} fill="var(--fill-0, #60A5FA)" fillRule="evenodd" id="Vector_2" />
                          <path clipRule="evenodd" d={svgPaths.p33ef52c0} fill="var(--fill-0, #60A5FA)" fillRule="evenodd" id="Vector_3" />
                        </g>
                        <defs>
                          <clipPath id="clip0_3521_2104">
                            <rect fill="white" height="7.65625" width="27.9688" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col gap-[6px] h-[60px] items-start left-0 pr-[4px] top-[41.66px] w-[28px]" data-name="Container">
                    <div className="h-[24px] relative shrink-0 w-full" data-name="Button">
                      <BackgroundImage1>
                        <path d={svgPaths.p19568f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M21 21L16.7 16.7" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </BackgroundImage1>
                    </div>
                    <div className="h-[24px] relative shrink-0 w-full" data-name="MiniCart">
                      <IconBackgroundImage4 />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[269.766px] relative shrink-0 w-[57.617px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="h-[15.766px] relative shrink-0 w-full" data-name="Link">
                    <div className="absolute h-[15.766px] left-0 top-0 w-[57.602px]" data-name="Logo">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.6016 15.7656">
                        <g clipPath="url(#clip0_3521_2135)" id="Logo">
                          <path d={svgPaths.p2a52fdc0} fill="var(--fill-0, #60A5FA)" id="Vector" />
                          <path clipRule="evenodd" d={svgPaths.p2bc1ec00} fill="var(--fill-0, #60A5FA)" fillRule="evenodd" id="Vector_2" />
                          <path clipRule="evenodd" d={svgPaths.pabf4380} fill="var(--fill-0, #60A5FA)" fillRule="evenodd" id="Vector_3" />
                        </g>
                        <defs>
                          <clipPath id="clip0_3521_2135">
                            <rect fill="white" height="15.7656" width="57.6016" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col h-[148px] items-start relative shrink-0 w-full" data-name="Navigation">
                    <div className="h-[38px] relative shrink-0 w-full" data-name="List Item">
                      <div className="absolute content-stretch flex flex-col h-[38px] items-start left-0 pt-[2.5px] top-0 w-[57.617px]" data-name="div">
                        <LinkBackgroundImage>Shop</LinkBackgroundImage>
                        <div className="h-0 shrink-0 w-full" data-name="Container" />
                        <div className="h-0 shrink-0 w-full" data-name="Container" />
                      </div>
                    </div>
                    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
                      <BackgroundImageAndText2 text="Deals" additionalClassNames="top-0 w-[57.617px]" />
                    </div>
                    <div className="h-[38px] relative shrink-0 w-full" data-name="List Item">
                      <div className="absolute content-stretch flex flex-col h-[38px] items-start left-0 pt-[2.5px] top-0 w-[57.617px]" data-name="BlogMegaMenu">
                        <LinkBackgroundImage>{`Blog `}</LinkBackgroundImage>
                        <div className="h-0 shrink-0 w-full" data-name="Container" />
                        <div className="h-0 shrink-0 w-full" data-name="Container" />
                      </div>
                    </div>
                    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
                      <BackgroundImageAndText2 text="About" additionalClassNames="top-0 w-[57.617px]" />
                    </div>
                    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
                      <BackgroundImageAndText2 text="Contact" additionalClassNames="top-0 w-[57.617px]" />
                    </div>
                  </div>
                  <div className="h-[106px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute left-0 size-[20px] top-0" data-name="Button">
                      <IconBackgroundImage5>
                        <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </IconBackgroundImage5>
                    </div>
                    <div className="absolute h-[20px] left-0 top-[26px] w-[57.617px]" data-name="Link">
                      <IconBackgroundImage5>
                        <path d={svgPaths.p32d71800} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.pd6cac00} id="Vector_2" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </IconBackgroundImage5>
                    </div>
                    <div className="absolute left-0 size-[24px] top-[46px]" data-name="ThemeToggle">
                      <BackgroundImage1>
                        <path d={svgPaths.p2eea8bc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M12 2V4" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M12 20V22" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M4.93 4.93L6.34 6.34" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M17.66 17.66L19.07 19.07" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M2 12H4" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M20 12H22" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M6.34 17.66L4.93 19.07" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M19.07 4.93L17.66 6.34" id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </BackgroundImage1>
                    </div>
                    <div className="absolute left-0 size-[24px] top-[76px]" data-name="MiniCart">
                      <IconBackgroundImage4 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 size-0 top-0" data-name="nav">
        <div className="absolute h-[42px] left-0 rounded-br-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.06)] top-[-100px] w-[153.422px]" data-name="a" style={{ backgroundImage: "linear-gradient(164.69deg, rgb(147, 51, 234) 0%, rgb(126, 34, 206) 100%)" }}>
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[16px] not-italic text-[#60a5fa] text-[12px] top-[13px] whitespace-nowrap">Skip to main content</p>
        </div>
        <div className="absolute h-[42px] left-[140px] rounded-br-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.06)] top-[-100px] w-[116.07px]" data-name="a" style={{ backgroundImage: "linear-gradient(160.107deg, rgb(147, 51, 234) 0%, rgb(126, 34, 206) 100%)" }}>
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[16px] not-italic text-[#60a5fa] text-[12px] top-[13px] whitespace-nowrap">Skip to search</p>
        </div>
        <div className="absolute h-[42px] left-[260px] rounded-br-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.06)] top-[-100px] w-[112.133px]" data-name="a" style={{ backgroundImage: "linear-gradient(159.466deg, rgb(147, 51, 234) 0%, rgb(126, 34, 206) 100%)" }}>
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[16px] not-italic text-[#60a5fa] text-[12px] top-[13px] whitespace-nowrap">Skip to footer</p>
        </div>
      </div>
    </div>
  );
}