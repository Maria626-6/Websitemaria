import svgPaths from "./svg-2c2rsq0uqp";
import img1Mano2 from "figma:asset/4d3ff3c0aebe333070c018b2684ecbed89e673ea.png";

export default function ContactFormImage({ className }: { className?: string }) {
  return (
    <div className={className || "h-[2104.999px] relative rounded-[3px] w-[2939.04px]"} data-name="contact-form-image">
      <div className="absolute contents inset-0">
        <div className="absolute content-stretch flex gap-[68px] inset-[39.38%_74.18%_0_0] items-center">
          <div className="absolute h-[1267.335px] left-[92px] top-[30px] w-[521.318px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 521.318 1267.33">
              <path clipRule="evenodd" d={svgPaths.p36e06b40} fill="var(--fill-0, #FBF7FC)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
          <div className="h-[1276px] relative shrink-0 w-[759px]" data-name="1 mano 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1Mano2} />
          </div>
        </div>
        <div className="absolute flex inset-[39.05%_0_0.43%_74.18%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="content-stretch flex gap-[68px] items-center relative size-full">
              <div className="absolute h-[1267.335px] left-[92px] top-[30px] w-[521.318px]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 521.318 1267.33">
                  <path clipRule="evenodd" d={svgPaths.p36e06b40} fill="var(--fill-0, #FBF7FC)" fillRule="evenodd" id="Union" />
                </svg>
              </div>
              <div className="h-[1274px] relative shrink-0 w-[759px]" data-name="1 mano 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1Mano2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[0_14.43%_25.13%_14.22%]">
          <div className="absolute inset-[-0.13%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2101 1580">
              <path d={svgPaths.p3fca3e00} id="Vector 48" stroke="var(--stroke-0, black)" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
