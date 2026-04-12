import { notFound } from "next/navigation";
import ContentCalendarSection from "../../components/ContentCalendarSection";
import FlyerSection from "../../components/FlyerSection";
import OpinionSection from "../../components/OpinionSection";
import PersonaSection from "../../components/PersonaSection";
import PressSection from "../../components/PressSection";
import StoryboardSection from "../../components/StoryboardSection";
import TeamSection from "../../components/TeamSection";
import TutorialSection from "../../components/TutorialSection";
import FAQSection from "../../components/FAQSection";
import ReviewsSection from "../../components/ReviewsSection";
import NewslettersSection from "../../components/NewslettersSection";
import SocialSection from "../../components/SocialSection";

export default function DynamicPage({ params }: { params: { page: string } }) {
  switch (params.page) {
    case "calendar":
      return <ContentCalendarSection />;
    case "flyer":
      return <FlyerSection />;
    case "opinion":
      return <OpinionSection />;
    case "persona":
      return <PersonaSection />;
    case "press":
      return <PressSection />;
    case "storyboard":
      return <StoryboardSection />;
    case "team":
      return <TeamSection />;
    case "tutorial":
      return <TutorialSection />;
    case "faq":
      return <FAQSection />;
    case "reviews":
      return <ReviewsSection />;
    case "newsletters":
      return <NewslettersSection />;
    case "social":
      return <SocialSection />;
    default:
      notFound();
  }
}
