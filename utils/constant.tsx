import { SparkLineChart } from "@/components/chart/sparklineChart";
import {
  DailyChange,
  MarketPrice,
  Star,
} from "@/components/main/markets/table/tableComps";
import { Column } from "@/components/ui/tableComponent/tableComponent";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { danxomeCodex, igunCodex, theHornsCodex } from "@/public/audio";
import { allImages } from "@/public/images/images";
import { ArtCollection } from "@/types/martkes";

export const artsData: ArtCollection[] = [
  {
    id: "art-collect-00001",
    initials: "DC",
    authorName: "Usiko",
    authorAvarta: null,
    owners: 1200,
    supply: 2200,
    availableItems: 3,
    about:
      "In the 17th century, the Kingdom of Dahomey rose with Abomey as its capital. Abomey was a living archive of artistry and spiritual devotion, its royal palaces adorned with bas-reliefs that chronicled the triumphs of kings. These motifs spoke in symbols: serpents for kingship, lions for bravery, suns for renewal. The people were artisans, farmers, and spiritualists bound by ritual. The kingdom was renowned for its military organization and reverence for the divine feminine, embodied in the Agojie, the all-female regiment. Religion, art, and governance were intertwined. Today, Abomey stands as a UNESCO World Heritage Site, its ruins whispering stories of a civilization that refused to be forgotten. Local artisans continue to craft appliqué tapestries inspired by the ancient motifs, bridging past and present. The Danxomɛ Codex transforms that spirit into blockchain. Each NFT becomes a modern bas-relief, coded in light instead of clay. Through its chapters—Agojie, Fa, and Vodun—the collection reimagines Dahomey's art and philosophy. It preserves the soul of a people who understood that memory is power, and to remember is to resist erasure. This is cultural resurrection, ensuring Dahomey's essence continues to inspire across centuries.",
    aboutAudio: danxomeCodex.danxomeDaxomeCodexTheHeritageOfDahomey,
    floor: 5.67,
    oneDayvolumeChange: "+12.7%",
    topOffer: 4.37,
    totalVolume: 524.67,
    artwork: allImages.product1,
    artworkName: "Danxomɛ Codex",
    priceHistory: [1.2, 13, 5, 26, 12],

    nfts: [
      {
        id: "1024",
        name: "Agojie: Shields of Abomey",
        floor: 24.12,
        list: 22.1,
        sale: 22.1,
        artwork: allImages.danNFT1,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about: `The Agojie, known to Europeans as the "Amazons of Dahomey," were the beating heart of Dahomey's military might. Drawn from families across the kingdom, these women trained with unmatched discipline and skill, mastering weapons and battle formations with both ritual and rigor. They swore lifelong loyalty to the king and lived within the royal compound of Abomey, renouncing marriage to dedicate themselves entirely to the protection of the state. When French colonial troops invaded in 1890, the Agojie stood on the frontlines. Their chants rose above the thunder of muskets as they sang songs of defiance and faith. This NFT immortalizes their legacy through appliqué banners that once fluttered over the Abomey court, scarification patterns that marked identity and rank, and cowries that symbolized wealth, femininity, and divine power. Each trait speaks of valor and resistance, lions for courage, serpents for wisdom, and suns for rebirth. The Agojie were not only soldiers but also living emblems of Dahomey's spiritual and political strength. On the blockchain, they return as protectors of memory, digital warriors guarding the legacy of those who fought with faith and flame.\n
Traits \nAppliqué Banner Motif- lion, serpent, sun \nScarification Pattern- cheek, arm, chest \nWeapon of Valor- rifle, machete, spear \nAdornment-brass jewelry \nCowrie Arrangement- headpiece, belt \n`,
        aboutAudio: danxomeCodex.agojieShieldsOfAbomey,
      },
      {
        id: "1025",
        name: "Fa: The Diviner’s Chain",
        floor: 30.75,
        list: 28.5,
        sale: 28.5,
        artwork: allImages.danNFT2,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about: `At the heart of Dahomean spirituality was Fa, a sacred system of divination that connected human life to cosmic order. The bokonon, or priest, cast palm nuts or chains and interpreted the patterns, called odu, to reveal guidance from the spirits. Each sign represented a story, proverb, or warning, blending philosophy and mysticism into a structured language of fate. Long before the concept of digital code, the people of Abomey practiced a binary art of knowing, an ancient data system powered by intuition and ritual.
This NFT transforms Fa's patterns into a symphony of sacred geometry, binary symbols, and spiritual colors. Earthy browns recall the soil of Abomey, gold represents enlightenment, and indigo symbolizes divine insight. The diviner's silhouette or mask becomes a bridge between worlds, reminding us that knowledge was once an act of communion with the unseen. In preserving Fa on the blockchain, Usiko safeguards one of Africa's earliest philosophical technologies.\n

Traits\nBinary Odu Pattern- sacred signatures\nDivination Object-palm nuts, chain, tray\nSymbolic Motif- spirals, crossroads\nEnergy Palette-fire, water, earth, sky\nDiviner's Presence- silhouette, hand, mask
`,
        aboutAudio: danxomeCodex.faTheDivinersChain,
      },
      {
        id: "1026",
        name: "Vodun: The Moving Elements",
        floor: 15.99,
        list: 14.75,
        sale: 14.75,
        artwork: allImages.danNFT3,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about: `Before it was renamed and misinterpreted as "Voodoo," Vodun thrived as Dahomey's heartbeat and the foundation of its worldview. It was a living system that honored the presence of spirit in all things. Every river, wind, and fire had a consciousness, and every stone carried memory. Within the royal city, Vodun priests and artisans created power figures (bochio) adorned with nails, beads, feathers, and cowries. These sacred objects were charged through ritual offerings of palm oil, blood, and song. The ceremonies of drumming, dance, and possession formed a rhythm that connected the human and the divine, binding community to cosmos.
This NFT reawakens that rhythm through animated spirit forms, storm-lit patterns, and textural elements inspired by Abomey's sacred art. Figurines draped in digital beads, calabashes glowing with elemental auras, and ancestral symbols painted in luminous patterns all come together to create a living archive of Vodun's vitality. It celebrates a worldview where nothing is static, where spirits move through wind and water, and where history flows like energy between generations. Through the Danxomɛ Codex, Vodun lives again, not as myth but as movement.\n

Traits\nSpirit Figurine Type- beaded, carved, spiked\nCowrie Placement- necklace, torso, calabash\nOffering Object- calabash, staff, pot\nElemental Aura-storm, river, wind\nSpiritual Markings- nails, painted signs
`,
        aboutAudio: danxomeCodex.vodunTheMovingElements,
      },
      {
        id: "1027",
        name: "The throne of King Ghezo of Dahomey",
        floor: 15.99,
        list: 14.75,
        sale: 22.1,
        artwork: allImages.danNFT4,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about: `In the heart of Dahomey, where power was sculpted in bronze and belief, the throne of King Ghezo stood as both artifact and oracle. Ghezo, who ruled from 1818 to 1858, transformed Dahomey from a warrior empire into a symbol of regal modernity where diplomacy and divine ritual intertwined. His throne was not merely a seat of rule but the living embodiment of the king's essence: strength, continuity, and sacred balance.
Forged in the fusion of African craftsmanship and Afro-Brazilian artistry, the throne reflected cultural renaissance. Its curved seat, intricate lattice woodwork, and geometric engravings of lozenges and circles echoed cosmological truths. Coral inlays and beaded armrests glimmered under firelight, while brass plaques told stories of conquest and ceremony. It was the centerpiece of the Annual Hwetanu Festival, where Ghezo, robed in coral and gold, reaffirmed his covenant with ancestors and people. Ghezo's reign was one of reform and brilliance—revitalizing military discipline, restructuring trade relations, and expanding Abomey's cultural wealth. This NFT reimagines that royal relic digitally, carrying the memory of coral, gold, and divine legacy.\n

Traits\nEra: 19th Century (Circa 1818–1858)\nCultural Theme: Royal Display and Material Diplomacy\nSymbolism: Sovereignty, Ritual Authority, Artistic Mastery\nHistorical Context: Represents King Ghezo's reign, his reforms, grandeur, and diplomatic vision\nDesign Influence: Afro-Brazilian and Portuguese Workshop Craftsmanship\nCeremonial Function: Throne of the Hwetanu Festival\nArtistic Motifs: Lozenges, Circles, Latticework, and Coral Embellishments
`,
        aboutAudio: danxomeCodex.theMagnificentThroneOfKingGhezo,
      },
    ],
  },
  {
    id: "art-collect-00002",
    initials: "TH",
    authorName: "Usiko",
    authorAvarta: allImages.avarta1,
    owners: 900,
    supply: 1600,
    availableItems: 3,
    about: `In the early 19th century, Shaka kaSenzangakhona kaJama rose to shape one of Africa's greatest empires. Born around 1787, his early years were marked by exile and hardship that tempered his resolve. When he ascended to leadership, he united scattered Nguni clans into the AmaZulu, "people of the heavens." The Zulu Kingdom stretched across what is now KwaZulu-Natal, a region of rolling plains and fertile valleys where communal life revolved around amakhaya, circular homesteads built around sacred cattle enclosures representing social, economic, and spiritual order.
Shaka's genius lay in transformation. He reorganized military life into age-based regiments called amabutho, housed in amakhanda settlements. He revolutionized weaponry with the iklwa, a short stabbing spear, and the isihlangu, a broad cowhide shield symbolizing protection and identity. The "bull's horns" formation embodied Zulu unity and strategy. Beyond warfare, Shaka's reign was rooted in spirituality. Diviners known as izanusi read messages in cast bones and sky patterns. The people believed izulu, the heavens, were home to uNkulunkulu and ancestral spirits who guided the living. The Horns Codex captures this worldview, connecting Shaka's age to the blockchain and preserving the genius of a people whose legacy remains written in KwaZulu's clouds and soil.
`,
    aboutAudio: theHornsCodex.theHornsCodexShakasAge,
    floor: 5.67,
    oneDayvolumeChange: "-2.7%",
    topOffer: 4.37,
    totalVolume: 524.67,
    artwork: allImages.product2,
    artworkName: "The Horns Codex: Shaka’s Age",
    priceHistory: [1.2, 13, 5, 26, 12],

    nfts: [
      {
        id: "1024",
        name: "Impi - Spears of the Horns",
        floor: 24.12,
        list: 22.1,
        sale: 22.1,
        artwork: allImages.theHornsNFT1,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about: `The Impi, Shaka's regiments, were the backbone of his nation and the living embodiment of unity and discipline. Each regiment bore a unique name, color, and pattern of shield hide that signified its place within the greater Zulu army. Young men were initiated into the amabutho after ceremonial rites that marked the passage from youth to warriorhood. Their daily lives were guided by precision and ritual: dawn drills to strengthen the body, evening chants to strengthen the spirit, and feasts to honor victory. War, to them, was not an act of destruction but a sacred duty tied to loyalty, identity, and survival.
This NFT expresses that rhythm and discipline through layered visual storytelling. Shields patterned after ox hides, spears rendered with metallic light, and beadwork glowing like constellations across digital plains together evoke the energy of the impi's march. Every pixel speaks of identity and courage, preserving in code the unbroken circle of Zulu unity that once defined an empire.\n
Traits\nBone Set- Ivory, Wood, Stone\nPattern- Crossroads, Spiral, Cluster\nDiviner's Tool- Casting Mat, Tray, Ground\nGlyphs- Bead, Line, Circle\nPalette- Earth, Sky, Fire
`,
        aboutAudio: theHornsCodex.impiSpearsOfTheHorns,
      },
      {
        id: "1025",
        name: "Amathambo - The Casting",
        floor: 30.75,
        list: 28.5,
        sale: 28.5,
        artwork: allImages.theHornsNFT2,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about: `In Zulu belief, the bones speak with ancestral wisdom. The art of ukuhlola amathambo, meaning the casting of bones, linked the living with the unseen world of ancestors. When a diviner cast bones upon a mat, their positions and patterns revealed messages of guidance and warning. These bones could include fragments of ivory, carved wood, or animal remains, each carrying deep symbolic meaning. The horn represented strength, the rib represented vulnerability, and the tooth represented persistence. Through these readings, kings and families sought counsel on matters of war, healing, and destiny.
This NFT reimagines the sacred casting of bones as a cosmic constellation of patterns and symbols. Geometric forms and bead-like glyphs reflect the sacred order within chaos. Each composition is a digital homage to the izanusi, whose insight shaped the decisions of leaders and the fate of nations. The Amathambo NFT honors their wisdom, showing that even in the digital realm, the voice of their ancestors continues to guide and protect.\n
Traits\nBone Set- Ivory, Wood, Stone\nPattern- Crossroads, Spiral, Cluster\nDiviner's Tool- Casting Mat, Tray, Ground\nGlyphs- Bead, Line, Circle\nPalette- Earth, Sky, Fire
`,
        aboutAudio: theHornsCodex.amathamboTheCasting,
      },
      {
        id: "1026",
        name: "Izulu - Storm Over KwaZulu",
        floor: 15.99,
        list: 14.75,
        sale: 14.75,
        artwork: allImages.theHornsNFT3,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about: `To the Zulu, the sky known as izulu was not merely a physical expanse but the seat of divine presence and ancestral power. The very name "Zulu" means "heaven" or "sky," signifying a people descended from the realm above. The land of KwaZulu was shaped by this belief: rain nourished the earth, lightning cleansed it, and thunder carried messages from the ancestors. During Shaka's reign, storms were seen as both omens and affirmations, their energy reflecting the strength and resolve of the nation.
The Izulu NFT captures this divine conversation between sky and earth. Rolling clouds merge with mountain silhouettes, lightning fractures the digital horizon, and color gradients shift from ochre to indigo, recalling the atmosphere after rainfall. The artwork becomes both landscape and spirit, embodying the idea that history, like the storm, never ends but transforms. Through Izulu, the Codex honors the rhythm of creation and remembrance, carrying the essence of KwaZulu's heavens into the digital age.\n
Traits:\nSky State- Dawn, Midday, Storm, Twilight or Nightfall\nLightning Presence- None, Single Bolt, Forked Strike, Storm Web or Ancestral Flash\nLandscape Horizon- Low Hills, Wide Plains, Distant Mountains, Tree Line, Homestead Cluster\nAtmosphere Texture- Clear Skies, Rolling Clouds, Heavy Mist, Rainfall, Thunderstorm Veil\nColor Palette- Earth Browns, Sky Blues, Storm Greys, Sunset Ambers, Spirit Glow
`,
        aboutAudio: theHornsCodex.izuluStormOverKwaZulu,
      },
      {
        id: "1027",
        name: "Queen Nandi - The Sweet one",
        floor: 15.99,
        list: 14.75,
        sale: 28.5,
        artwork: allImages.theHornsNFT4,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about: `In the royal courts of the Zulu kingdom during the late 18th century, Queen Nandi rose from quiet resilience to become one of the most revered matriarchs. Her name, meaning The Sweet One, carried not just tenderness but wisdom that held nations together. She was the mother of King Shaka kaSenzangakhona, the ruler who would unite the Zulu clans into a formidable empire. Long before her son's rise to power, Nandi's counsel shaped the values that would define his reign. She taught him patience before war, vision before conquest, and reverence before power.
Though her life began in exile and uncertainty, Nandi's spirit endured like the mountains of KwaZulu. Her presence in the royal homestead was marked by beaded regalia, cattle symbolism, and the strength of maternal wisdom. To the Zulu people, she was a living bridge between human and spiritual realms, a voice of calm guidance amid the storms of ambition. This NFT honors the power of motherhood, legacy, and quiet strength that shaped a dynasty. When she passed, her son mourned deeply, and the nation wept. Yet the winds through KwaZulu still carry her spirit of wisdom, courage, and eternal love. Her legacy endures in Shaka's lineage and the divine rhythm of the Zulu heritage.\n
Traits\nHistorical Era: Precolonial Southern Africa, 18th–19th Century\nRoyal Lineage: Mother of King Shaka kaSenzangakhona\nCrown Type: Beaded Headdress of Traditional Zulu Design\nAdornment Symbolism: Beads for Status, Cattle for Wealth\nCultural Role: Matriarch and Spiritual Guide of the Zulu Nation\nPersonality Essence: Nurturing, Wise, and Resilient\nDivine Energy: Ancestral Blessing, Strength and Grace in Harmony\nLegacy Artifact: Royal Adornment of Nandi, Symbol of Maternal Power
`,
        aboutAudio: theHornsCodex.queenNandiTheSweetOne,
      },
    ],
  },
  {
    id: "art-collect-00003",
    initials: "IG",
    authorName: "Usiko",
    authorAvarta: allImages.avarta2,
    owners: 500,
    supply: 1900,
    availableItems: 3,
    about: `Long before modern Nigeria, the Benin Kingdom, known as Ìlú Bìnì, stood as one of Africa's most sophisticated civilizations. Emerging around the 11th century under the Ogiso dynasty, later succeeded by the powerful line of Obas beginning with Oba Eweka I, Benin grew into a structured empire of advanced urban planning, artistic brilliance, and spiritual worldview binding leadership to divine responsibility.
The city of Benin astonished early European visitors with its order and scale. By the 15th-16th centuries, Portuguese traders described wide streets, courtyards, markets, and intricate moats rivaling European capitals. These interactions gave rise to coral regalia and brass artistry synonymous with Benin royalty. Yet before foreign contact, the Edo people had perfected bronze casting, architecture, and governance reflecting harmony between spiritual authority and civic duty. At the center was Igun Street, home of the Igun Eronmwon, the royal guild of bronze casters established by Oba Oguola in the 13th century. Using lost-wax technique, they created breathtaking plaques and heads that told stories of ancestry and divinity. Bronze was sacred language—memory made eternal. The Igun Codex digitally resurrects this legacy through four chapters honoring Benin's architectural genius, divine kingship, colonial destruction, and continuity of leadership.
`,
    aboutAudio: igunCodex.theIgunCodexTheBronzeLegacyOfBenin,

    floor: 5.67,
    oneDayvolumeChange: "+35.7%",
    topOffer: 4.37,
    totalVolume: 524.67,
    artwork: allImages.product3,
    artworkName: "IGUN CODEX: Court of Benin",
    priceHistory: [1.2, 13, 5, 26, 12],

    nfts: [
      {
        id: "1026",
        name: "The Benin Expedition",
        floor: 15.99,
        list: 14.75,
        sale: 14.75,
        artwork: allImages.igunNFT3,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about: `Before modern cities rose across the world, there stood the Benin Earthworks, locally known as Iya. Construction began around 800 AD and continued over several centuries. These earthen walls and moats extended across more than 16,000 kilometers, making them the largest man-made structure on Earth before the industrial age. They surrounded not only the capital but also smaller towns and villages, uniting them under a single administrative and cultural system.
The walls symbolized both physical defense and spiritual boundary. In Edo cosmology, boundaries separated sacred order from chaos, civilization from wilderness. Each layer of soil and moat carried a story of community labor and devotion to the Oba. European explorers who visited in the 15th and 16th centuries described Benin as a city "as large as Lisbon," its architecture marked by geometric harmony and civic pride. When the British invaded in 1897, large sections of the walls were destroyed. This NFT reimagines the Great Wall as it once stood: an unbroken circle of earth, unity, and ingenuity that remains a wonder of African civilization.\n
Traits\nMedium: Earthen architecture\nEra: c. 800 AD – 1400 AD\nSymbolism: Strength, unity, divine protection\nCultural Theme: Engineering brilliance and sacred geography\nHistorical Context: Represents Benin's precolonial technological advancement and societal organization
`,
        aboutAudio: igunCodex.theBeninExpedition,
      },

      {
        id: "1025",
        name: "The Cast Brass",
        floor: 30.75,
        list: 28.5,
        sale: 28.5,
        artwork: allImages.igunNFT2,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about: `In Benin belief, the leopard embodied royal power, agility, and divine authority. The Oba was often called Ekpen n'Oba, meaning "the leopard of the king." Only the Oba had the right to hunt or keep a leopard, and it became a sacred symbol in court rituals and royal art. Brass and bronze sculptures often depicted the Oba flanked by leopards or holding them by the necks, representing his control over the wild and his balance between strength and wisdom.
This NFT celebrates one of the most revered forms of Benin artistry: the cast brass of the Oba holding leopards. Created by the Igun Eronmwon using the lost-wax technique, such works were placed in royal altars to honor past kings and call upon ancestral strength. The artistry reflects not only technical brilliance but also spiritual symbolism. The leopard's poise mirrors the Oba's restraint, while its ferocity mirrors his ability to protect his people. Through the fusion of art and power, the Leopard Throne remains an emblem of a ruler whose authority came from both earth and spirit.\n
Traits\nMedium: Cast brass relief\nEra: 16th – 17th century\nSymbolism: Divine kingship, power, wisdom, protection\nCultural Theme: The sacred relationship between the Oba and nature\nHistorical Context: Reflects royal regalia and spiritual authority depicted in Benin bronzes
`,
        aboutAudio: igunCodex.theCastBrass,
      },
      {
        id: "1024",
        name: "The Immortal Oba",
        floor: 24.12,
        list: 22.1,
        sale: 22.1,
        artwork: allImages.igunNFT1,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about: `Among the most renowned works of African art are the commemorative heads of Benin Obas. These bronze sculptures were placed on royal altars to honor departed kings and preserve the divine lineage of leadership. Each head features elaborate coral bead crowns, layered neck rings, and stylized features that express serenity and power. The most famous examples, such as the Head of Oba Uhunmwun Elao, date from the 16th century and remain masterpieces of proportion and craftsmanship.
This NFT reinterprets the Oba's Crowned Head as a living symbol of continuity. The coral beads signify wealth and spiritual purity. The brass represents eternity, forged through fire yet resistant to time. The symmetrical eyes reflect divine perception, and the upward gaze toward the sky symbolizes eternal communion with the ancestors. Even after the devastation of 1897, the art of bronze casting continued along Igun Street, passed from father to son in defiance of erasure. The Crowned Head remains a beacon of survival, artistry, and sacred leadership.\n
Traits\nMedium: Cast bronze sculpture\nEra: 15th – 18th century\nSymbolism: Ancestral continuity, divine kingship, immortality\nCultural Theme: Royal remembrance and spiritual lineage\nHistorical Context: Represents ancestral veneration and the artistry of Igun Street guilds
`,
        aboutAudio: igunCodex.theImmortalOba,
      },
    ],
  },
];

export const marketColData: Column<ArtCollection>[] = [
  {
    title: "COLLECTION",
    key: "authorName",
    render: (_, { id, initials, artworkName }) => (
      <div className="flex items-center gap-6">
        <Star id={id} />
        <UserAvatar
          url={""}
          initials={initials}
          displayName={artworkName}
          showTitle
        />
      </div>
    ),
    headerClassName: "!text-start",
    columnClassName: "!w-40",
  },
  {
    title: "FLOOR",
    key: "floor",
    render: (_, { floor }) => (
      <MarketPrice price={floor} className="justify-end" />
    ),
  },
  {
    title: "1D CHANGE",
    key: "oneDayvolumeChange",
    render: (_, { oneDayvolumeChange }) => (
      <DailyChange volume={oneDayvolumeChange} className="text-end" />
    ),
  },
  {
    title: "VOLUME",
    key: "totalVolume",
    render: (_, { totalVolume }) => (
      <MarketPrice price={totalVolume} className="justify-end" />
    ),
  },
  {
    title: "OWNERS",
    key: "owners",
    render: (_, { owners }) => <>{owners}</>,
  },
  {
    title: "SUPPLY",
    key: "supply",
    render: (_, { supply }) => <>{supply}</>,
  },
  {
    title: "LAST 7D",
    key: "priceHistory",
    render: (_, { priceHistory }) => (
      <div className="flex justify-center">
        <SparkLineChart series={[{ data: priceHistory }]} className="w-2/12" />
      </div>
    ),
  },
];

export const learningHubData = [
  {
    title: "What is a NFT?",
    imageUrl: allImages.learn1,
    path: "https://usiko.gitbook.io/docs/documentation",
  },
  {
    title: "How to buy a NFT",
    imageUrl: allImages.learn2,
    path: "https://usiko.gitbook.io/docs/documentation/learn-with-usiko/markdown",
  },
  {
    title: "How to create a collection on Usiko",
    imageUrl: allImages.learn3,
    path: "https://usiko.gitbook.io/docs/documentation/learn-with-usiko/images-and-media",
  },
  {
    title: "Understanding Usiko Ethos",
    imageUrl: allImages.learn4,
    path: "https://usiko.gitbook.io/docs/documentation/learn-with-usiko/integrations",
  },
  {
    title: "What is Hedera DLT?",
    imageUrl: allImages.learn5,
    path: "https://usiko.gitbook.io/docs/documentation/learn-with-usiko/interactive-blocks",
  },
];
