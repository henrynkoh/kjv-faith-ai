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
  {
    topic: "Atonement",
    title: "How is atonement made?",
    law: {
      ref: "Leviticus 16:34",
      text: "And this shall be an everlasting statute unto you, to make an atonement for the children of Israel for all their sins once a year.",
    },
    gospel: {
      ref: "Romans 5:11",
      text: "And not only so, but we also joy in God through our Lord Jesus Christ, by whom we have now received the atonement.",
    },
  },
  {
    topic: "Access to God",
    title: "How do we approach God?",
    law: {
      ref: "Leviticus 16:2",
      text: "And the LORD said unto Moses, Speak unto Aaron thy brother, that he come not at all times into the holy place within the vail before the mercy seat, which is upon the ark; that he die not.",
    },
    gospel: {
      ref: "Ephesians 3:12",
      text: "In whom we have boldness and access with confidence by the faith of him.",
    },
  },
  {
    topic: "Condemnation",
    title: "Is there condemnation?",
    law: {
      ref: "2 Corinthians 3:9",
      text: "For if the ministration of condemnation be glory, much more doth the ministration of righteousness exceed in glory.",
    },
    gospel: {
      ref: "Romans 8:1",
      text: "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.",
    },
  },
  {
    topic: "Election",
    title: "Who are God's chosen people?",
    law: {
      ref: "Deuteronomy 7:6",
      text: "For thou art an holy people unto the LORD thy God: the LORD thy God hath chosen thee to be a special people unto himself, above all people that are upon the face of the earth.",
    },
    gospel: {
      ref: "Ephesians 1:4",
      text: "According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love.",
    },
  },
  {
    topic: "The Veil",
    title: "Is there a veil between God and man?",
    law: {
      ref: "Exodus 26:33",
      text: "And thou shalt hang up the vail under the taches, that thou mayest bring in thither within the vail the ark of the testimony: and the vail shall divide unto you between the holy place and the most holy.",
    },
    gospel: {
      ref: "Hebrews 10:19-20",
      text: "Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus, By a new and living way, which he hath consecrated for us, through the veil, that is to say, his flesh.",
    },
  },
  {
    topic: "Perfection",
    title: "Can the law make us perfect?",
    law: {
      ref: "Hebrews 7:19",
      text: "For the law made nothing perfect, but the bringing in of a better hope did; by the which we draw nigh unto God.",
    },
    gospel: {
      ref: "Colossians 2:10",
      text: "And ye are complete in him, which is the head of all principality and power.",
    },
  },
  {
    topic: "Strength",
    title: "Where does strength come from?",
    law: {
      ref: "Deuteronomy 6:5",
      text: "And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.",
    },
    gospel: {
      ref: "Philippians 4:13",
      text: "I can do all things through Christ which strengtheneth me.",
    },
  },
  {
    topic: "Identity",
    title: "Who are we in relation to God?",
    law: {
      ref: "Exodus 19:6",
      text: "And ye shall be unto me a kingdom of priests, and an holy nation. These are the words which thou shalt speak unto the children of Israel.",
    },
    gospel: {
      ref: "2 Corinthians 5:17",
      text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
    },
  },
  {
    topic: "Wages of Sin",
    title: "What is the penalty for sin?",
    law: {
      ref: "Ezekiel 18:20",
      text: "The soul that sinneth, it shall die. The son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son.",
    },
    gospel: {
      ref: "Romans 6:23",
      text: "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
    },
  },
  {
    topic: "Walking",
    title: "How should we walk?",
    law: {
      ref: "Deuteronomy 5:33",
      text: "Ye shall walk in all the ways which the LORD your God hath commanded you, that ye may live, and that it may be well with you.",
    },
    gospel: {
      ref: "Galatians 5:16",
      text: "This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh.",
    },
  },
  {
    topic: "Reward",
    title: "What is the reward for obedience?",
    law: {
      ref: "Deuteronomy 28:3",
      text: "Blessed shalt thou be in the city, and blessed shalt thou be in the field.",
    },
    gospel: {
      ref: "2 Corinthians 5:10",
      text: "For we must all appear before the judgment seat of Christ; that every one may receive the things done in his body, according to that he hath done, whether it be good or bad.",
    },
  },
  {
    topic: "Reconciliation",
    title: "How is man reconciled to God?",
    law: {
      ref: "Leviticus 6:7",
      text: "And the priest shall make an atonement for him before the LORD: and it shall be forgiven him for any thing of all that he hath done in trespassing therein.",
    },
    gospel: {
      ref: "2 Corinthians 5:18-19",
      text: "And all things are of God, who hath reconciled us to himself by Jesus Christ, and hath given to us the ministry of reconciliation; To wit, that God was in Christ, reconciling the world unto himself, not imputing their trespasses unto them.",
    },
  },
  {
    topic: "Redemption",
    title: "How are we redeemed?",
    law: {
      ref: "Exodus 13:13",
      text: "And every firstling of an ass thou shalt redeem with a lamb; and if thou wilt not redeem it, then thou shalt break his neck: and all the firstborn of man among thy children shalt thou redeem.",
    },
    gospel: {
      ref: "Romans 3:24",
      text: "Being justified freely by his grace through the redemption that is in Christ Jesus.",
    },
  },
  {
    topic: "Glory",
    title: "What glory has been revealed?",
    law: {
      ref: "2 Corinthians 3:10",
      text: "For even that which was made glorious had no glory in this respect, by reason of the glory that excelleth.",
    },
    gospel: {
      ref: "2 Corinthians 3:18",
      text: "But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord.",
    },
  },
  {
    topic: "Fear vs Love",
    title: "Do we serve God in fear or love?",
    law: {
      ref: "Deuteronomy 6:13",
      text: "Thou shalt fear the LORD thy God, and serve him, and shalt swear by his name.",
    },
    gospel: {
      ref: "2 Timothy 1:7",
      text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
    },
  },
  {
    topic: "Written Code",
    title: "What about the written ordinances?",
    law: {
      ref: "Deuteronomy 31:26",
      text: "Take this book of the law, and put it in the side of the ark of the covenant of the LORD your God, that it may be there for a witness against thee.",
    },
    gospel: {
      ref: "Colossians 2:14",
      text: "Blotting out the handwriting of ordinances that was against us, which was contrary to us, and took it out of the way, nailing it to his cross.",
    },
  },
  {
    topic: "Promise",
    title: "How are the promises received?",
    law: {
      ref: "Deuteronomy 11:27",
      text: "A blessing, if ye obey the commandments of the LORD your God, which I command you this day.",
    },
    gospel: {
      ref: "Galatians 3:22",
      text: "But the scripture hath concluded all under sin, that the promise by faith of Jesus Christ might be given to them that believe.",
    },
  },
  {
    topic: "The Flesh",
    title: "What about the flesh?",
    law: {
      ref: "Romans 8:3",
      text: "For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh.",
    },
    gospel: {
      ref: "Galatians 5:24",
      text: "And they that are Christ's have crucified the flesh with the affections and lusts.",
    },
  },
  {
    topic: "Wrath",
    title: "Are we subject to God's wrath?",
    law: {
      ref: "Romans 4:15",
      text: "Because the law worketh wrath: for where no law is, there is no transgression.",
    },
    gospel: {
      ref: "1 Thessalonians 5:9",
      text: "For God hath not appointed us to wrath, but to obtain salvation by our Lord Jesus Christ.",
    },
  },
  {
    topic: "Enemies or Friends",
    title: "What is our relationship with God?",
    law: {
      ref: "Romans 5:10",
      text: "For if, when we were enemies, we were reconciled to God by the death of his Son, much more, being reconciled, we shall be saved by his life.",
    },
    gospel: {
      ref: "Romans 8:31",
      text: "What shall we then say to these things? If God be for us, who can be against us?",
    },
  },
  {
    topic: "Separation",
    title: "Can anything separate us from God?",
    law: {
      ref: "Isaiah 59:2",
      text: "But your iniquities have separated between you and your God, and your sins have hid his face from you, that he will not hear.",
    },
    gospel: {
      ref: "Romans 8:38-39",
      text: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
    },
  },
  {
    topic: "Predestination",
    title: "What has God planned for us?",
    law: {
      ref: "Deuteronomy 30:19",
      text: "I call heaven and earth to record this day against you, that I have set before you life and death, blessing and cursing: therefore choose life, that both thou and thy seed may live.",
    },
    gospel: {
      ref: "Ephesians 1:5",
      text: "Having predestinated us unto the adoption of children by Jesus Christ to himself, according to the good pleasure of his will.",
    },
  },
  {
    topic: "The Body",
    title: "What is the body of believers?",
    law: {
      ref: "Exodus 12:3",
      text: "Speak ye unto all the congregation of Israel, saying, In the tenth day of this month they shall take to them every man a lamb, according to the house of their fathers, a lamb for an house.",
    },
    gospel: {
      ref: "Ephesians 4:4-5",
      text: "There is one body, and one Spirit, even as ye are called in one hope of your calling; One Lord, one faith, one baptism.",
    },
  },
  {
    topic: "Grace vs Merit",
    title: "Is salvation earned or given?",
    law: {
      ref: "Leviticus 18:5",
      text: "Ye shall therefore keep my statutes, and my judgments: which if a man do, he shall live in them: I am the LORD.",
    },
    gospel: {
      ref: "Romans 11:6",
      text: "And if by grace, then is it no more of works: otherwise grace is no more grace. But if it be of works, then is it no more grace: otherwise work is no more work.",
    },
  },
  {
    topic: "Eternal Security",
    title: "Can salvation be lost?",
    law: {
      ref: "Ezekiel 18:24",
      text: "But when the righteous turneth away from his righteousness, and committeth iniquity... shall he live? All his righteousness that he hath done shall not be mentioned.",
    },
    gospel: {
      ref: "Romans 8:30",
      text: "Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified.",
    },
  },
  {
    topic: "The Mystery",
    title: "What is the mystery revealed to Paul?",
    law: {
      ref: "Amos 3:7",
      text: "Surely the Lord GOD will do nothing, but he revealeth his secret unto his servants the prophets.",
    },
    gospel: {
      ref: "Ephesians 3:3-6",
      text: "How that by revelation he made known unto me the mystery... That the Gentiles should be fellowheirs, and of the same body, and partakers of his promise in Christ by the gospel.",
    },
  },
  {
    topic: "Destination",
    title: "Where is our eternal home?",
    law: {
      ref: "Isaiah 65:17",
      text: "For, behold, I create new heavens and a new earth: and the former shall not be remembered, nor come into mind.",
    },
    gospel: {
      ref: "2 Corinthians 5:1",
      text: "For we know that if our earthly house of this tabernacle were dissolved, we have a building of God, an house not made with hands, eternal in the heavens.",
    },
  },
  {
    topic: "Judgment",
    title: "How will we be judged?",
    law: {
      ref: "Ecclesiastes 12:14",
      text: "For God shall bring every work into judgment, with every secret thing, whether it be good, or whether it be evil.",
    },
    gospel: {
      ref: "2 Corinthians 5:10",
      text: "For we must all appear before the judgment seat of Christ; that every one may receive the things done in his body, according to that he hath done, whether it be good or bad.",
    },
  },
  {
    topic: "Israel vs the Church",
    title: "Who are God's people today?",
    law: {
      ref: "Exodus 19:5-6",
      text: "Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people... And ye shall be unto me a kingdom of priests.",
    },
    gospel: {
      ref: "Ephesians 2:14-16",
      text: "For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us... for to make in himself of twain one new man, so making peace.",
    },
  },
];

export function getRandomComparison(): LawGospelComparison {
  return comparisons[Math.floor(Math.random() * comparisons.length)];
}
