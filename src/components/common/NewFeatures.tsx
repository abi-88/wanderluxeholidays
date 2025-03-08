import Image from "next/image";
import styles from "../../app/commonstyles";

const NewFeatures = ({ imgUrl, title, subtitle }: any) => (
    <div className="flex-1 flex flex-col 
  sm:max-w-[250px] min-w-[210px]">
        <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px]
    bg-black/50`}>
            <Image
                src={imgUrl}
                alt='icon'
                height={12}
                width={12}
                className="w-1/2 h-1/2 object-contain"
            />
        </div>
        <h1 className="text-[#3378b0] mt-[26px] font-bold
   text-[24px] leading-[30px]">
            {title}
        </h1>
        <p className="flex-1 mt-[16px] font-normal text-[18px]
   text-[#222222] leading-[32px]">{subtitle}</p>
    </div>
);

export default NewFeatures;
