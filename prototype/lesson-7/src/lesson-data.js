export const courseMap = [
  { id: "desire", label: "Desire", status: "complete" },
  { id: "promise", label: "Promise", status: "current" },
  { id: "dwelling", label: "Dwelling", status: "upcoming" },
  { id: "power", label: "Power", status: "upcoming" },
  { id: "born-of-god", label: "Born of God", status: "upcoming" }
];

export const interpretationStandard = [
  {
    rank: "1",
    title: "Direct inspired interpretation",
    description: "An inspired writer identifies what a statement meant, or explicitly applies an earlier passage."
  },
  {
    rank: "2",
    title: "Contextual connection",
    description: "An inspired writer uses the same language or figure, or records an event that connects the passages."
  },
  {
    rank: "3",
    title: "Conjecture",
    description: "A proposed connection that Scripture does not directly make. It may be considered, but it must not be taught as certainty."
  }
];

export const sections = [
  {
    id: "gift-of-god",
    nav: "The gift",
    kicker: "Think",
    title: "What is the gift of God?",
    lead: "Lesson 7 begins with the unresolved question that closed Part Two.",
    blocks: [
      {
        type: "scripture",
        reference: "John 4:10",
        text: "“If you knew the gift of God ... you would have asked him, and he would have given you living water.”"
      },
      {
        type: "prompt",
        label: "Think",
        title: "Begin before the conclusion",
        text: "What do you think Jesus is referring to when He speaks to the woman at the well about the “gift of God”?",
        responseId: "john-4-opening",
        placeholder: "Record your first reading. Your response remains only in this browser tab."
      },
      {
        type: "note",
        label: "Guardrail",
        text: "Do not settle the metaphor from the phrase alone. Follow John’s own sequence and allow his inspired explanation to control the conclusion."
      }
    ]
  },
  {
    id: "john-thread",
    nav: "John's thread",
    kicker: "Observe",
    title: "John builds the meaning progressively",
    lead: "The class outline asks the learner to build this thread rather than begin with a doctrinal label.",
    blocks: [
      {
        type: "thread",
        items: [
          { reference: "John 1:12–13", text: "Those who receive Him are described as born of God." },
          { reference: "John 3:3–5", text: "Jesus joins new birth with water and the Spirit." },
          { reference: "John 4:10–14", text: "The gift becomes living water, welling up to eternal life." },
          { reference: "John 7:37–39", text: "Jesus again invites the thirsty to drink. John then identifies what Jesus meant." }
        ]
      },
      {
        type: "prompt",
        label: "Observe",
        title: "Track the repeated ideas",
        text: "What develops as John moves from birth, to water and Spirit, to living water, and finally to his own explanation?",
        responseId: "john-thread-observation",
        placeholder: "Note repeated words, images, audiences, and changes in clarity."
      }
    ]
  },
  {
    id: "inspired-interpretation",
    nav: "Inspired meaning",
    kicker: "Conclude",
    title: "John supplies the interpretation",
    lead: "The sequence reaches its controlling statement in John 7:39.",
    blocks: [
      {
        type: "scripture",
        reference: "John 7:39",
        text: "“Now this he said about the Spirit, whom those who believed in him were to receive.”"
      },
      {
        type: "conclusion",
        label: "Conclude",
        title: "The inspired explanation",
        text: "John does not leave “living water” undefined. In this thread, he explicitly says Jesus spoke about the Spirit whom believers were to receive."
      },
      {
        type: "disclosure",
        id: "interpretation-standard",
        label: "Guardrail",
        title: "Open the Bible Standard for Interpretation",
        intro: "Use the strongest available level of evidence and state weaker connections with restraint.",
        items: interpretationStandard
      }
    ]
  },
  {
    id: "promise-for-all",
    nav: "The promise",
    kicker: "Compare",
    title: "The promise reaches those who respond",
    lead: "Acts records the first proclamation after the Spirit is poured out on the apostles.",
    blocks: [
      {
        type: "scripture",
        reference: "Acts 2:38–39",
        text: "Peter joins repentance and baptism with forgiveness and “the gift of the Holy Spirit,” then says, “the promise is for you ... and for all who are far off.”"
      },
      {
        type: "compare",
        label: "Compare",
        columns: [
          { title: "John", body: "Believers would receive the Spirit pictured as living water." },
          { title: "Acts", body: "Peter announces the gift and promise to those called by God who respond." }
        ]
      },
      {
        type: "prompt",
        label: "Observe",
        title: "Stay with Peter's wording",
        text: "What does Peter connect with the promise in Acts 2:38–39? List only what the passage states before drawing implications.",
        responseId: "acts-promise",
        placeholder: "Repentance, baptism, forgiveness, gift, promise, audience ..."
      }
    ]
  },
  {
    id: "salvation-spirit-terms",
    nav: "Spirit terms",
    kicker: "Compare",
    title: "The apostles speak of salvation in Spirit terms",
    lead: "The manuscript places several apostolic descriptions side by side. Their language differs, but each locates the Spirit within the Christian’s salvation.",
    blocks: [
      {
        type: "comparison-grid",
        items: [
          { reference: "Titus 3:4–7", phrase: "Washing of regeneration and renewal of the Holy Spirit", emphasis: "Saved by God's mercy; heirs in hope" },
          { reference: "2 Thessalonians 2:13–14", phrase: "Saved through sanctification by the Spirit and belief in the truth", emphasis: "Called through the gospel" },
          { reference: "Ephesians 1:13–14", phrase: "Sealed with the promised Holy Spirit", emphasis: "The Spirit as guarantee of the inheritance" },
          { reference: "Galatians 3:2–14", phrase: "Received the Spirit by hearing with faith", emphasis: "Began by the Spirit; received the promised Spirit through faith" }
        ]
      },
      {
        type: "note",
        label: "Guardrail",
        text: "Comparison does not erase each passage’s context. It shows the repeated apostolic practice of describing salvation through the Spirit’s work and gift."
      }
    ]
  },
  {
    id: "begin-and-walk",
    nav: "Begin and walk",
    kicker: "Observe",
    title: "Beginning by the Spirit and walking by the Spirit",
    lead: "Galatians distinguishes entry into Christ from the continuing life that follows.",
    blocks: [
      {
        type: "compare",
        label: "Compare",
        columns: [
          {
            title: "Began by the Spirit",
            body: "Galatians 3 recalls how they received the Spirit, heard with faith, and were baptized into Christ."
          },
          {
            title: "Walk by the Spirit",
            body: "Galatians 5 addresses continued conduct: resisting the flesh and bearing the fruit of the Spirit."
          }
        ]
      },
      {
        type: "prompt",
        label: "Conclude",
        title: "Keep the two moments connected",
        text: "Why would Paul remind people who had begun by the Spirit that they must also walk by the Spirit?",
        responseId: "begin-walk",
        placeholder: "Write a short conclusion from Galatians 3–5."
      }
    ]
  },
  {
    id: "clay-tent-building",
    nav: "Clay to building",
    kicker: "Observe",
    title: "Clay jar, tent, and building",
    lead: "Second Corinthians develops one connected movement through several images.",
    blocks: [
      {
        type: "progression",
        items: [
          { title: "Clay jar", reference: "2 Corinthians 4:7", text: "Mortal weakness makes clear that the surpassing power belongs to God." },
          { title: "Tent", reference: "2 Corinthians 4:16–5:7", text: "The outer self wastes away while the inner self is renewed. The Spirit is given as a guarantee while Christians walk by faith." },
          { title: "Building and temple", reference: "2 Corinthians 5:1; 6:16", text: "The temporary dwelling gives way to a house from God. Paul calls believers the temple of the living God." }
        ]
      },
      {
        type: "conclusion",
        label: "Conclude",
        title: "The direction of the images",
        text: "The movement begins with mortal weakness, continues through daily renewal, and looks toward the permanent dwelling God promises."
      }
    ]
  },
  {
    id: "confidence-and-response",
    nav: "Confidence",
    kicker: "Think",
    title: "How can a Christian know?",
    lead: "The manuscript refuses both presumption and despair. Confidence begins with God’s promise and continues in a life that responds to Him.",
    blocks: [
      {
        type: "response-path",
        items: [
          { title: "Scripture", text: "Measure belief and conduct by words taught by the Spirit." },
          { title: "Obedience and walking", text: "Keep His commandments and walk by the Spirit rather than gratifying the flesh." },
          { title: "Repentance and prayer", text: "When sin grieves the Spirit, turn back and pray rather than treating failure as final." },
          { title: "Renewal", text: "The inner self is renewed day by day while the Spirit remains the guarantee of what God has promised." }
        ]
      },
      {
        type: "scripture",
        reference: "1 John 3:24",
        text: "“Whoever keeps his commandments abides in God, and God in him.” John then points to the Spirit God has given."
      },
      {
        type: "prompt",
        label: "Think",
        title: "Confidence without presumption",
        text: "How do promise, obedience, repentance, prayer, and renewal work together in the manuscript’s answer?",
        responseId: "confidence",
        placeholder: "Explain the relationship in your own words."
      }
    ]
  },
  {
    id: "all-truth",
    nav: "All truth",
    kicker: "Guardrail",
    title: "“All truth” and its audience",
    lead: "John 14–16 records promises Jesus made in the upper room to the apostles before His death.",
    blocks: [
      {
        type: "scripture",
        reference: "John 16:13–14",
        text: "Jesus tells His hearers that the Spirit of truth will guide them into all the truth, declare what is to come, and glorify Him."
      },
      {
        type: "compare",
        label: "Compare",
        columns: [
          {
            title: "Apostolic promise",
            body: "The Helper would teach, remind, guide, and declare to the chosen witnesses as they carried Christ’s testimony."
          },
          {
            title: "The church receives the revealed word",
            body: "Later believers possess that truth through the completed apostolic and prophetic testimony, not by claiming the apostles’ revelatory commission for themselves."
          }
        ]
      },
      {
        type: "prompt",
        label: "Observe",
        title: "Identify the audience",
        text: "What in John 14–16 shows who Jesus was addressing, and how does that limit what may be claimed from the promise?",
        responseId: "all-truth-audience",
        placeholder: "Note the audience, task, and promised work of the Helper."
      },
      {
        type: "note",
        label: "Guardrail",
        text: "The manuscript distinguishes the continuing work of the Spirit from continuing revelation. The Spirit does not contradict the Father or the Son, add new doctrine, or remove a believer’s responsibility to obey."
      }
    ]
  },
  {
    id: "new-covenant",
    nav: "New covenant",
    kicker: "Compare",
    title: "The promised Spirit belongs to the new covenant",
    lead: "Isaiah and Jeremiah supply the prophetic setting that the New Testament writers carry forward.",
    blocks: [
      {
        type: "comparison-grid",
        items: [
          { reference: "Isaiah 43:15–19", phrase: "“Behold, I am doing a new thing.”", emphasis: "The Creator can make a way where none appears." },
          { reference: "Isaiah 44:2–3", phrase: "Water on thirsty land; the Spirit on offspring", emphasis: "Promise expressed through water and Spirit" },
          { reference: "Jeremiah 31:31–33", phrase: "A new covenant; the law written on hearts", emphasis: "“I will be their God, and they shall be my people.”" },
          { reference: "2 Corinthians 3:3–6", phrase: "Written with the Spirit on human hearts", emphasis: "Apostolic ministry of the new covenant" }
        ]
      },
      {
        type: "conclusion",
        label: "Conclude",
        title: "Better promises",
        text: "Hebrews applies Jeremiah’s promise to the covenant mediated by Christ. The manuscript places the promised Spirit at the center of the access, sanctification, and confidence this covenant provides."
      }
    ]
  },
  {
    id: "new-name-and-synthesis",
    nav: "Restraint and synthesis",
    kicker: "Guardrail",
    title: "The “new name” exercise",
    lead: "A familiar connection provides a final test of interpretive restraint.",
    blocks: [
      {
        type: "compare",
        label: "Compare",
        columns: [
          { title: "Isaiah 62", body: "God says His people will be called by a new name and supplies marriage and restoration language." },
          { title: "Acts 11:26", body: "Luke reports that the disciples were first called Christians at Antioch." }
        ]
      },
      {
        type: "prompt",
        label: "Guardrail",
        title: "How strong is the connection?",
        text: "Does an inspired writer explicitly connect Isaiah’s “new name” with Acts 11:26? Classify the claim using the Bible Standard for Interpretation and explain the restraint required.",
        responseId: "new-name-restraint",
        placeholder: "Direct interpretation, contextual connection, or conjecture? Why?"
      },
      {
        type: "synthesis",
        label: "Conclude",
        title: "God's Promise",
        points: [
          "John identifies the living water as the Spirit believers were to receive.",
          "Acts announces the gift and promise as part of the response to the gospel.",
          "The epistles repeatedly describe salvation, assurance, renewal, and holy living in Spirit terms.",
          "The prophetic hope of a renewed people and new covenant reaches its fulfillment through Christ."
        ]
      },
      {
        type: "transition",
        label: "Next",
        title: "God's Dwelling",
        text: "If the Father and Son remain in heaven, how does Scripture describe God making His home with His people through the Spirit?"
      }
    ]
  }
];
