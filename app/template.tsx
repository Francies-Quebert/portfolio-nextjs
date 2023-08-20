import AmiateTransition from "@/components/AmiateTransition";

export default function Template({ children }: { children: React.ReactNode }) {
    return <AmiateTransition>{children}</AmiateTransition>
  }