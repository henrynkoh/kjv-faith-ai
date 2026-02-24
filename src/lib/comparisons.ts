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
  {
    topic: "Baptism",
    title: "What is the role of baptism?",
    law: {
      ref: "Mark 1:4",
      text: "John did baptize in the wilderness, and preach the baptism of repentance for the remission of sins.",
    },
    gospel: {
      ref: "1 Corinthians 1:17",
      text: "For Christ sent me not to baptize, but to preach the gospel: not with wisdom of words, lest the cross of Christ should be made of none effect.",
    },
  },
  {
    topic: "Inheritance",
    title: "How do we receive our inheritance?",
    law: {
      ref: "Deuteronomy 28:1-2",
      text: "And it shall come to pass, if thou shalt hearken diligently unto the voice of the LORD thy God, to observe and to do all his commandments... all these blessings shall come on thee.",
    },
    gospel: {
      ref: "Ephesians 1:11",
      text: "In whom also we have obtained an inheritance, being predestinated according to the purpose of him who worketh all things after the counsel of his own will.",
    },
  },
  {
    topic: "The Spirit",
    title: "How do we receive the Holy Spirit?",
    law: {
      ref: "Acts 2:38",
      text: "Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.",
    },
    gospel: {
      ref: "Ephesians 1:13",
      text: "In whom ye also trusted, after that ye heard the word of truth, the gospel of your salvation: in whom also after that ye believed, ye were sealed with that holy Spirit of promise.",
    },
  },
  {
    topic: "Works",
    title: "What is the role of works?",
    law: {
      ref: "James 2:24",
      text: "Ye see then how that by works a man is justified, and not by faith only.",
    },
    gospel: {
      ref: "Titus 3:5",
      text: "Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost.",
    },
  },
  {
    topic: "Hope",
    title: "What is our hope?",
    law: {
      ref: "Jeremiah 31:31-33",
      text: "Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel... I will put my law in their inward parts, and write it in their hearts.",
    },
    gospel: {
      ref: "Titus 2:13",
      text: "Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ.",
    },
  },
  {
    topic: "Kingdom",
    title: "What kingdom is promised?",
    law: {
      ref: "Matthew 6:10",
      text: "Thy kingdom come. Thy will be done in earth, as it is in heaven.",
    },
    gospel: {
      ref: "Philippians 3:20",
      text: "For our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ.",
    },
  },
  {
    topic: "Sin Nature",
    title: "What about the sin nature?",
    law: {
      ref: "Romans 7:24",
      text: "O wretched man that I am! who shall deliver me from the body of this death?",
    },
    gospel: {
      ref: "Romans 6:6",
      text: "Knowing this, that our old man is crucified with him, that the body of sin might be destroyed, that henceforth we should not serve sin.",
    },
  },
  {
    topic: "Peace with God",
    title: "How do we have peace with God?",
    law: {
      ref: "Isaiah 48:22",
      text: "There is no peace, saith the LORD, unto the wicked.",
    },
    gospel: {
      ref: "Romans 5:1",
      text: "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ.",
    },
  },
  {
    topic: "Gentiles",
    title: "What is the status of Gentiles?",
    law: {
      ref: "Ephesians 2:12",
      text: "That at that time ye were without Christ, being aliens from the commonwealth of Israel, and strangers from the covenants of promise, having no hope, and without God in the world.",
    },
    gospel: {
      ref: "Ephesians 2:13",
      text: "But now in Christ Jesus ye who sometimes were far off are made nigh by the blood of Christ.",
    },
  },
  {
    topic: "The Temple",
    title: "Where does God dwell?",
    law: {
      ref: "1 Kings 8:27",
      text: "But will God indeed dwell on the earth? behold, the heaven and heaven of heavens cannot contain thee; how much less this house that I have builded?",
    },
    gospel: {
      ref: "1 Corinthians 6:19",
      text: "What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own?",
    },
  },
  {
    topic: "Tithing",
    title: "Is tithing required?",
    law: {
      ref: "Malachi 3:10",
      text: "Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts.",
    },
    gospel: {
      ref: "2 Corinthians 9:7",
      text: "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.",
    },
  },
  {
    topic: "Confession",
    title: "Must we confess sins to be forgiven?",
    law: {
      ref: "1 John 1:9",
      text: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
    },
    gospel: {
      ref: "Colossians 2:13",
      text: "And you, being dead in your sins and the uncircumcision of your flesh, hath he quickened together with him, having forgiven you all trespasses.",
    },
  },
  {
    topic: "Adoption",
    title: "What is our standing before God?",
    law: {
      ref: "Exodus 19:5",
      text: "Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people.",
    },
    gospel: {
      ref: "Galatians 4:5-6",
      text: "To redeem them that were under the law, that we might receive the adoption of sons. And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father.",
    },
  },
  {
    topic: "Liberty",
    title: "Are we free or bound?",
    law: {
      ref: "Acts 15:10",
      text: "Now therefore why tempt ye God, to put a yoke upon the neck of the disciples, which neither our fathers nor we were able to bear?",
    },
    gospel: {
      ref: "Galatians 5:1",
      text: "Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.",
    },
  },
];

export function getRandomComparison(): LawGospelComparison {
  return comparisons[Math.floor(Math.random() * comparisons.length)];
}
