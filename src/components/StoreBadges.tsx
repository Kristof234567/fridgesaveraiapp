import googlePlayBadge from "@/assets/google-play-badge.png";
import appStoreBadge from "@/assets/app-store-badge.png";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.fridgesaverai.app";

interface StoreBadgesProps {
  className?: string;
  badgeHeight?: string;
}

const StoreBadges = ({ className = "", badgeHeight = "h-11" }: StoreBadgesProps) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer nofollow">
      <img src={googlePlayBadge} alt="Get it on Google Play" className={`${badgeHeight} w-auto`} />
    </a>
    <div className="relative">
      <img src={appStoreBadge} alt="Download on the App Store" className={`${badgeHeight} w-auto opacity-60`} />
      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-medium text-muted-foreground whitespace-nowrap">
        Coming Soon
      </span>
    </div>
  </div>
);

export default StoreBadges;
