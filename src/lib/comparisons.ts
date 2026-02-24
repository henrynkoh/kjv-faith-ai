export interface LawGospelComparison {
  topic: string;
  title: string;
  law: { ref: string; text: string };
  gospel: { ref: string; text: string };
}

export const comparisons: LawGospelComparison[] = [
  {
    topic: "Salvation",
    title: "How is a man saved?",
    law: {
      ref: "Deuteronomy 6:25",
      text: "And it shall be our righteousness, if we observe to do all these commandments before the LORD our God, as he hath commanded us.",
    },
    gospel: {
      ref: "Ephesians 2:8-9",
      text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.",
    },
  },
  {
    topic: "Righteousness",
    title: "How does a man become righteous?",
    law: {
      ref: "Romans 10:5",
      text: "For Moses describeth the righteousness which is of the law, That the man which doeth those things shall live by them.",
    },
    gospel: {
      ref: "Romans 3:22",
      text: "Even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe: for there is no difference.",
    },
  },
  {
    topic: "Circumcision",
    title: "Is circumcision required?",
    law: {
      ref: "Genesis 17:10",
      text: "This is my covenant, which ye shall keep, between me and you and thy seed after thee; Every man child among you shall be circumcised.",
    },
    gospel: {
      ref: "Galatians 5:6",
      text: "For in Jesus Christ neither circumcision availeth any thing, nor uncircumcision; but faith which worketh by love.",
    },
  },
  {
    topic: "Sabbath",
    title: "Must we keep the sabbath?",
    law: {
      ref: "Exodus 31:14",
      text: "Ye shall keep the sabbath therefore; for it is holy unto you: every one that defileth it shall surely be put to death.",
    },
    gospel: {
      ref: "Colossians 2:16",
      text: "Let no man therefore judge you in meat, or in drink, or in respect of an holyday, or of the new moon, or of the sabbath days.",
    },
  },
  {
    topic: "Food Laws",
    title: "Are there dietary restrictions?",
    law: {
      ref: "Leviticus 11:7",
      text: "And the swine, though he divide the hoof, and be clovenfooted, yet he cheweth not the cud; he is unclean to you.",
    },
    gospel: {
      ref: "1 Timothy 4:4",
      text: "For every creature of God is good, and nothing to be refused, if it be received with thanksgiving.",
    },
  },
  {
    topic: "Priesthood",
    title: "Who is our priest?",
    law: {
      ref: "Numbers 3:10",
      text: "And thou shalt appoint Aaron and his sons, and they shall wait on their priest's office: and the stranger that cometh nigh shall be put to death.",
    },
    gospel: {
      ref: "Hebrews 7:24-25",
      text: "But this man, because he continueth ever, hath an unchangeable priesthood. Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.",
    },
  },
  {
    topic: "Sacrifice",
    title: "What sacrifice is required?",
    law: {
      ref: "Leviticus 1:3-4",
      text: "If his offering be a burnt sacrifice of the herd, let him offer a male without blemish... And he shall put his hand upon the head of the burnt offering; and it shall be accepted for him to make atonement for him.",
    },
    gospel: {
      ref: "Hebrews 10:10",
      text: "By the which will we are sanctified through the offering of the body of Jesus Christ once for all.",
    },
  },
  {
    topic: "Mediator",
    title: "Who is the mediator between God and man?",
    law: {
      ref: "Deuteronomy 5:5",
      text: "I stood between the LORD and you at that time, to shew you the word of the LORD: for ye were afraid by reason of the fire, and went not up into the mount.",
    },
    gospel: {
      ref: "1 Timothy 2:5",
      text: "For there is one God, and one mediator between God and men, the man Christ Jesus.",
    },
  },
  {
    topic: "Justification",
    title: "How is a man justified before God?",
    law: {
      ref: "Galatians 3:11",
      text: "But that no man is justified by the law in the sight of God, it is evident: for, The just shall live by faith.",
    },
    gospel: {
      ref: "Romans 5:1",
      text: "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ.",
    },
  },
  {
    topic: "Ministry",
    title: "What ministry has God given?",
    law: {
      ref: "2 Corinthians 3:7",
      text: "But if the ministration of death, written and engraven in stones, was glorious, so that the children of Israel could not stedfastly behold the face of Moses for the glory of his countenance; which glory was to be done away.",
    },
    gospel: {
      ref: "2 Corinthians 3:8-9",
      text: "How shall not the ministration of the spirit be rather glorious? For if the ministration of condemnation be glory, much more doth the ministration of righteousness exceed in glory.",
    },
  },
  {
    topic: "Covenant",
    title: "Which covenant are we under?",
    law: {
      ref: "Hebrews 8:7",
      text: "For if that first covenant had been faultless, then should no place have been sought for the second.",
    },
    gospel: {
      ref: "Hebrews 8:6",
      text: "But now hath he obtained a more excellent ministry, by how much also he is the mediator of a better covenant, which was established upon better promises.",
    },
  },
  {
    topic: "Curse vs Blessing",
    title: "Are we under a curse or a blessing?",
    law: {
      ref: "Galatians 3:10",
      text: "For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them.",
    },
    gospel: {
      ref: "Galatians 3:13-14",
      text: "Christ hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree: That the blessing of Abraham might come on the Gentiles through Jesus Christ.",
    },
  },
  {
    topic: "The Law's Purpose",
    title: "What was the law's purpose?",
    law: {
      ref: "Galatians 3:24",
      text: "Wherefore the law was our schoolmaster to bring us unto Christ, that we might be justified by faith.",
    },
    gospel: {
      ref: "Galatians 3:25",
      text: "But after that faith is come, we are no longer under a schoolmaster.",
    },
  },
  {
    topic: "Dead to the Law",
    title: "What is our relationship to the law now?",
    law: {
      ref: "Romans 7:9-10",
      text: "For I was alive without the law once: but when the commandment came, sin revived, and I died. And the commandment, which was ordained to life, I found to be unto death.",
    },
    gospel: {
      ref: "Romans 7:6",
      text: "But now we are delivered from the law, that being dead wherein we were held; that we should serve in newness of spirit, and not in the oldness of the letter.",
    },
  },
  {
    topic: "Forgiveness",
    title: "How are sins forgiven?",
    law: {
      ref: "Hebrews 9:22",
      text: "And almost all things are by the law purged with blood; and without shedding of blood is no remission.",
    },
    gospel: {
      ref: "Ephesians 1:7",
      text: "In whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace.",
    },
  },
];

export function getRandomComparison(): LawGospelComparison {
  return comparisons[Math.floor(Math.random() * comparisons.length)];
}
