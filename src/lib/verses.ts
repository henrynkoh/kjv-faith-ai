export interface KJVVerse {
  ref: string;
  text: string;
  theme: string;
}

export const kjvVerses: KJVVerse[] = [
  {
    ref: "2 Timothy 2:15",
    text: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
    theme: "rightly dividing",
  },
  {
    ref: "2 Timothy 2:16",
    text: "But shun profane and vain babblings: for they will increase unto more ungodliness.",
    theme: "avoiding error",
  },
  {
    ref: "2 Timothy 3:16",
    text: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.",
    theme: "scripture authority",
  },
  {
    ref: "2 Timothy 3:17",
    text: "That the man of God may be perfect, throughly furnished unto all good works.",
    theme: "equipped for works",
  },
  {
    ref: "2 Corinthians 4:2",
    text: "But have renounced the hidden things of dishonesty, not walking in craftiness, nor handling the word of God deceitfully; but by manifestation of the truth commending ourselves to every man's conscience in the sight of God.",
    theme: "handling truth",
  },
  {
    ref: "Psalm 119:105",
    text: "Thy word is a lamp unto my feet, and a light unto my path.",
    theme: "guidance",
  },
  {
    ref: "Psalm 119:11",
    text: "Thy word have I hid in mine heart, that I might not sin against thee.",
    theme: "memorizing scripture",
  },
  {
    ref: "Joshua 1:8",
    text: "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.",
    theme: "meditation",
  },
  {
    ref: "Hebrews 4:12",
    text: "For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.",
    theme: "power of the word",
  },
  {
    ref: "Isaiah 55:11",
    text: "So shall my word be that goeth forth out of my mouth: it shall not return unto me void, but it shall accomplish that which I please, and it shall prosper in the thing whereto I sent it.",
    theme: "God's word accomplishes",
  },
  {
    ref: "Proverbs 30:5",
    text: "Every word of God is pure: he is a shield unto them that put their trust in him.",
    theme: "purity of scripture",
  },
  {
    ref: "Romans 15:4",
    text: "For whatsoever things were written aforetime were written for our learning, that we through patience and comfort of the scriptures might have hope.",
    theme: "hope through scripture",
  },
  {
    ref: "John 17:17",
    text: "Sanctify them through thy truth: thy word is truth.",
    theme: "sanctification",
  },
  {
    ref: "Matthew 4:4",
    text: "But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.",
    theme: "living by the word",
  },
  {
    ref: "James 1:22",
    text: "But be ye doers of the word, and not hearers only, deceiving your own selves.",
    theme: "doing the word",
  },
  {
    ref: "Colossians 3:16",
    text: "Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.",
    theme: "word dwelling richly",
  },
  {
    ref: "1 Peter 2:2",
    text: "As newborn babes, desire the sincere milk of the word, that ye may grow thereby.",
    theme: "growing in the word",
  },
  {
    ref: "Psalm 12:6",
    text: "The words of the LORD are pure words: as silver tried in a furnace of earth, purified seven times.",
    theme: "pure words",
  },
  {
    ref: "Proverbs 2:6",
    text: "For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding.",
    theme: "divine wisdom",
  },
  {
    ref: "Acts 17:11",
    text: "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.",
    theme: "searching scriptures",
  },
];

export function getRandomVerse(): KJVVerse {
  return kjvVerses[Math.floor(Math.random() * kjvVerses.length)];
}
