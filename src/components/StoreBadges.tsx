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
      <a href="https://apps.apple.com/hu/app/fridgesaver-ai/id6763292095" target="_blank" rel="noopener noreferrer nofollow">
      <img src={appStoreBadge} alt="Download on the App Store" className={`${badgeHeight} w-auto`} />
      </a>
    </div>
  </div>
);

export default StoreBadges;
