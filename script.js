const sectors = document.querySelectorAll("[data-sector]");
const indicator = document.querySelector("#section-indicator");
const detailOverlay = document.querySelector("#detail-overlay");
const detailBody = document.querySelector(".detail-body");
const detailKicker = document.querySelector("#detail-kicker");
const detailSector = document.querySelector("#detail-sector");
const detailTitle = document.querySelector("#detail-title");
const detailContentNode = document.querySelector("#detail-content");
const detailCloseButton = document.querySelector(".detail-close");
const detailTriggers = document.querySelectorAll(".detail-trigger");
const afterlifePlayButtons = document.querySelectorAll(".afterlife-play");
const afterlifeAudioNodes = document.querySelectorAll(".afterlife-player audio");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const overlayDelay = prefersReducedMotion.matches ? 0 : 220;

const youtubeSearch = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

const pill = (id, label) =>
  `<button type="button" class="detail-pill" data-open-detail="${id}">${label}</button>`;

const link = (href, label) =>
  `<a class="detail-link" href="${href}" target="_blank" rel="noreferrer noopener">${label}</a>`;

const youtubeRoutes = {
  brandenburg: youtubeSearch(
    "Netherlands Bach Society Brandenburg Concerto No. 5 BWV 1050"
  ),
  wtc: youtubeSearch("Andras Schiff Bach Well-Tempered Clavier"),
  stMatthew: youtubeSearch("Philippe Herreweghe Bach St Matthew Passion"),
  massBMinor: youtubeSearch("John Eliot Gardiner Bach Mass in B minor"),
  celloSuites: youtubeSearch("Pieter Wispelwey Bach Cello Suites"),
  artOfFugue: youtubeSearch("Emerson String Quartet Bach Art of Fugue"),
};

const detailContent = {
  "year-1685": {
    kicker: "[ DOSSIER / 1685 ]",
    sector: "OVERTURE / HISTORICAL FRAME",
    title: "1685 / BACH ENTERS A HARDENED EUROPE",
    body: `
      <p class="detail-intro">
        Bach is born into a Europe run by courts, churches, and confessional discipline.
        The point is not romance. It is infrastructure.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Historical placement</p>
            <h3>1685 is a year of pressure, hierarchy, and ceremonial power.</h3>
            <p>
              Europe at this point is shaped by dynastic states, strict religious identities,
              and a public life organized through liturgy, civic ritual, and court display.
              Music is not an isolated art object. It is a working medium for worship,
              prestige, pedagogy, and political order.
            </p>
            <p>
              Bach arrives in Eisenach inside a family of professional musicians. That matters.
              He is not a detached genius dropped from the sky. He grows inside a trade,
              among town pipers, organists, copyists, choristers, and teachers.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Why the date matters</p>
            <ul class="detail-list">
              <li>1685 also gives us Handel and Domenico Scarlatti: three different futures for keyboard and theatrical music appear in one year.</li>
              <li>Bach's world is still pre-public-concert in the modern sense; work comes from institutions, not celebrity touring.</li>
              <li>Printing exists, but local manuscript circulation and personal networks still shape how music travels.</li>
              <li>The Lutheran chorale, organ culture, and family craft are already in place before Bach writes a single major work.</li>
            </ul>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Signal line</p>
            <div class="detail-code">BIRTH YEAR / EISENACH / LUTHERAN GERMANY / FAMILY TRADE / COURT + CHURCH NETWORKS</div>
            <p>
              If you want the historical shortcut: Bach is born into systems already under load,
              then spends a lifetime extracting maximum structural energy from them.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("early-years", "Early Years")}
              ${pill("counterpoint", "Counterpoint")}
              ${pill("year-1750", "1750")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  counterpoint: {
    kicker: "[ DOSSIER / COUNTERPOINT ]",
    sector: "GRAMMAR / LINE AGAINST LINE",
    title: "COUNTERPOINT / SEPARATE MINDS, SHARED GRAVITY",
    body: `
      <p class="detail-intro">
        Counterpoint means each line can justify itself, yet the total still locks.
        Bach turns that premise into architecture.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Core idea</p>
            <h3>Do not hear a block of harmony first. Hear several agents negotiating space.</h3>
            <p>
              In contrapuntal writing each voice has contour, rhythm, and momentum of its own.
              The discipline lies in making those lines coexist without producing harmonic wreckage.
              That is why fugue feels so compelling in Bach: not because it is academic, but because
              it stages pressure between independence and order.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Practical schema</p>
            <div class="detail-code">SUBJECT -> ANSWER -> COUNTERSUBJECT -> EPISODE -> RETURN -> STRETTO / WEIGHT / CADENCE</div>
            <p>
              That sequence is not a prison. It is a way of hearing how material gets tested,
              combined, stretched, and brought back with greater consequence than when it first appeared.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Good places to hear it</p>
            <ul class="detail-list">
              <li>The fugues of <em>The Well-Tempered Clavier</em> for clean line-tracing.</li>
              <li><em>The Art of Fugue</em> for bare process and severe clarity.</li>
              <li>Choruses from the <em>St Matthew Passion</em> for large-scale vocal counterpoint under emotional strain.</li>
            </ul>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("wtc", "Well-Tempered Clavier")}
              ${pill("art-of-fugue", "Art of Fugue")}
              ${pill("listen-upper-voice", "Follow a Voice")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  continuo: {
    kicker: "[ DOSSIER / CONTINUO ]",
    sector: "GRAMMAR / HARMONIC CHASSIS",
    title: "BASSO CONTINUO / THE FLOOR NEVER LEAVES",
    body: `
      <p class="detail-intro">
        Continuo is the hidden engine room of baroque music: bass line below, harmonic realization above.
        It is support, but never passive support.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">What it is</p>
            <h3>The bass line states direction. A chordal instrument turns that direction into lived harmony.</h3>
            <p>
              In practice that usually means cello, violone, bassoon, or viola da gamba reinforcing the bass,
              while harpsichord, organ, or lute fills in the implied harmony from figures and context.
              The result is a continuously active framework that lets upper voices move freely without losing orientation.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Why it matters in Bach</p>
            <p>
              Bach thinks vertically and horizontally at the same time. Continuo is where those dimensions meet.
              It creates forward pressure, locates cadences, and gives recitative, aria, concerto, and chorale their grounding.
              When the continuo changes character, the emotional weather changes with it.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Listen for</p>
            <ul class="detail-list">
              <li>Harpsichord articulation in Brandenburg No. 5.</li>
              <li>Organ-backed gravity in church works.</li>
              <li>Recitative support in the Passions: speech rides on harmonic rails.</li>
            </ul>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("harpsichord", "Harpsichord")}
              ${pill("listen-bass", "Track the Bass")}
              ${pill("sequences", "Sequences")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  sequences: {
    kicker: "[ DOSSIER / SEQUENCES ]",
    sector: "GRAMMAR / CONTROLLED REPETITION",
    title: "SEQUENCES / SMALL CELLS, GROWING FORCE",
    body: `
      <p class="detail-intro">
        A sequence repeats a figure at a new pitch level. Bach uses that simple device like a pressure pump.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Mechanics</p>
            <h3>Repeat, shift, repeat again. The ear learns the shape, so every move feels inevitable and larger.</h3>
            <p>
              Because the pattern is familiar, the listener hears motion with very high clarity.
              The sequence can climb, descend, tighten a harmonic screw, or widen a space.
              It lets a composer build length and momentum without sounding arbitrary.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Why Bach is good at it</p>
            <p>
              Bach rarely uses sequences as filler. He uses them to redistribute energy.
              A passage that begins as local movement suddenly starts to feel like a whole staircase,
              and by the time the cadence lands the pattern has turned into form.
            </p>
            <div class="detail-code">FIGURE A / A' / A'' / A''' -> TENSION RISE -> CADENTIAL IMPACT</div>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Best entry points</p>
            <ul class="detail-list">
              <li>Violin writing in the solo and concerto repertory.</li>
              <li>Episodes inside fugues, where the pattern briefly becomes a travel system.</li>
              <li>Cantata arias where repetition turns into persuasion.</li>
            </ul>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("brandenburg", "Brandenburg")}
              ${pill("counterpoint", "Counterpoint")}
              ${pill("listen-cadence", "Cadence")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  ornament: {
    kicker: "[ DOSSIER / ORNAMENT ]",
    sector: "GRAMMAR / RHETORICAL DETAIL",
    title: "ORNAMENT / DECORATION THAT CHANGES THE SENTENCE",
    body: `
      <p class="detail-intro">
        In Bach, ornaments are not frosting. They change timing, attack, emphasis, and even the shape of a cadence.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Function</p>
            <h3>An ornament can sharpen dissonance, delay resolution, or make a phrase speak with more bite.</h3>
            <p>
              Trills, mordents, turns, and appoggiaturas belong to the rhetoric of the line.
              They often sit exactly where the music needs stress, longing, or pointed arrival.
              Remove them and the phrase can lose grammar, not just color.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Performance tension</p>
            <p>
              The challenge is proportion. Too little and the line goes neutral. Too much and the architecture blurs.
              Good Bach playing makes the ornament feel inseparable from the thought, as if the phrase demanded it.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Where to hear it</p>
            <ul class="detail-list">
              <li>Da capo arias, where reprise invites heightened detail.</li>
              <li>Keyboard slow movements and sarabandes.</li>
              <li>Chorale embellishments in organ works and vocal settings.</li>
            </ul>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("baroque-violin", "Baroque Violin")}
              ${pill("wtc", "Well-Tempered Clavier")}
              ${pill("listen-dance", "Dance Engine")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "bach-core": {
    kicker: "[ DOSSIER / BACH CORE ]",
    sector: "BACH CORE / WHY HE HOLDS",
    title: "WHY BACH DOMINATES / SYNTHESIS, SCALE, AFTERLIFE",
    body: `
      <p class="detail-intro">
        Bach dominates because he is both culmination and toolkit: he absorbs styles around him,
        intensifies them, and leaves methods that later centuries can keep reopening.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">The synthesis</p>
            <h3>Italian propulsion, French dance profile, Lutheran chorale gravity, German contrapuntal obsession.</h3>
            <p>
              Bach's catalogue feels massive not only because it is large, but because it draws from several
              strong traditions at once. Concertos move with imported Italian sharpness. Suites remember court dance.
              Sacred works inherit chorale and liturgical weight. Keyboard writing becomes both laboratory and archive.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Why later centuries keep coming back</p>
            <p>
              Composers use Bach as training. Pianists use him to test touch and voicing. Conductors use him to calibrate
              proportion. Jazz musicians borrow the line-thinking. Twentieth-century modernists hear structural rigor.
              Electronic musicians hear pattern, sequencing, and modular combination. He survives because he is useful.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Fast answer</p>
            <div class="detail-code">NOT ONLY "GREAT COMPOSER" / ALSO A STORAGE SYSTEM FOR FORMS, PROCEDURES, AND LISTENING METHODS</div>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("leipzig", "Leipzig")}
              ${pill("art-of-fugue", "Art of Fugue")}
              ${pill("year-1750", "1750")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "early-years": {
    kicker: "[ DOSSIER / EARLY YEARS ]",
    sector: "TIMELINE / EISENACH TO LUENEBURG",
    title: "EARLY YEARS / FAMILY TRADE, LOSS, ABSORPTION",
    body: `
      <p class="detail-intro">
        Bach's early formation is practical, local, and severe: family apprenticeship, early bereavement,
        school discipline, and deep exposure to organ culture.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Biographic pressure</p>
            <h3>He loses both parents young, then keeps moving through institutions that train memory, craft, and discipline.</h3>
            <p>
              Eisenach gives him the family network. Ohrdruf gives him close contact with keyboard study through his elder brother.
              Lueneburg widens the horizon further, bringing contact with richer repertory, better libraries, and the larger North German world.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Musical result</p>
            <p>
              By the time Bach enters professional life he is already hearing chorales, keyboard literature,
              and regional styles not as separate compartments but as materials to be stored and reworked.
              The later abundance of his catalogue starts here: not with originality alone, but with immense intake.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Cities loaded early</p>
            <ul class="detail-list">
              <li>Eisenach: birth city, family line, Lutheran atmosphere.</li>
              <li>Ohrdruf: close study and copying habits.</li>
              <li>Lueneburg: broader repertory access and northern influence.</li>
            </ul>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("arnstadt", "Arnstadt")}
              ${pill("year-1685", "1685")}
              ${pill("weimar", "Weimar")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  arnstadt: {
    kicker: "[ DOSSIER / ARNSTADT ]",
    sector: "TIMELINE / FIRST POSTS",
    title: "ARNSTADT + MUEHLHAUSEN / THE YOUNG ORGANIST TESTS LIMITS",
    body: `
      <p class="detail-intro">
        Bach's first professional period already shows the pattern: remarkable skill, institutional friction,
        and a refusal to stay within the minimum expected frame.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Arnstadt</p>
            <h3>The famous long walk to hear Buxtehude is not trivia. It reveals appetite.</h3>
            <p>
              Bach travels far to hear major organ playing and stays longer than permitted.
              Reports from the period suggest tension with authorities and performers around his improvisation,
              rehearsal expectations, and musical complexity. The local post is too small for his velocity.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Muehlhausen</p>
            <p>
              Muehlhausen is short but important. Bach marries Maria Barbara and tests what serious church music
              can do in civic-religious life. The young composer is already moving from serviceable craft toward larger ambition.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Read the pattern</p>
            <div class="detail-code">TECHNIQUE HIGH / PATIENCE LOW / INSTITUTIONAL FIT TEMPORARY / GROWTH RAPID</div>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("weimar", "Weimar")}
              ${pill("continuo", "Continuo")}
              ${pill("early-years", "Early Years")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  weimar: {
    kicker: "[ DOSSIER / WEIMAR ]",
    sector: "TIMELINE / 1708-1717",
    title: "WEIMAR / ORGAN POWER, COPYING, TRANSFORMATION",
    body: `
      <p class="detail-intro">
        Weimar is where Bach's keyboard and organ imagination starts sounding monumental.
        It is a laboratory decade.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">What happens here</p>
            <h3>Transcriptions, organ works, and concentrated study thicken the language fast.</h3>
            <p>
              Bach absorbs Italian concerto writing by copying and transforming it. That process matters:
              it sharpens his sense of drive, ritornello logic, and large-scale directional force.
              Meanwhile the organ works and chorale preludes grow bolder in rhetoric and architecture.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Institutional drama</p>
            <p>
              The end is almost as famous as the music. When Bach tries to leave for Koethen he is briefly jailed.
              The episode makes plain that musicians were employees inside rank systems, not autonomous modern artists.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Hear it in</p>
            <ul class="detail-list">
              <li>Toccatas and fugues with theatrical reach.</li>
              <li>Chorale preludes where local devotion gets structural grandeur.</li>
              <li>Keyboard writing that suddenly thinks like an orchestra.</li>
            </ul>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("koethen", "Koethen")}
              ${pill("counterpoint", "Counterpoint")}
              ${pill("wtc", "Well-Tempered Clavier")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  koethen: {
    kicker: "[ DOSSIER / KOETHEN ]",
    sector: "TIMELINE / 1717-1723",
    title: "KOETHEN / INSTRUMENTAL MUSIC AT FULL PRESSURE",
    body: `
      <p class="detail-intro">
        Koethen matters because the court's conditions push Bach away from weekly large church production
        and toward instrumental concentration.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Court logic</p>
            <h3>A secular-leaning court with strong players creates room for instrumental invention.</h3>
            <p>
              This is the period of the Brandenburgs, the violin works, the cello suites,
              and major keyboard projects. Dance types, concerto principles, solo writing,
              and contrapuntal intelligence get fused into pieces that look practical on paper
              but open into enormous formal spaces.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Why listeners should care</p>
            <p>
              Koethen strips away some of the overt theological frame and reveals how much structural energy
              Bach can generate with instruments alone. If you want to hear motion, profile, rhythm, and line in clean relief, start here.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Primary outputs</p>
            <ul class="detail-list">
              <li>Brandenburg Concertos</li>
              <li>Solo violin works</li>
              <li>Cello Suites</li>
              <li>Keyboard collections in progress</li>
            </ul>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("brandenburg", "Brandenburg")}
              ${pill("cello-suites", "Cello Suites")}
              ${pill("leipzig", "Leipzig")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  leipzig: {
    kicker: "[ DOSSIER / LEIPZIG ]",
    sector: "TIMELINE / 1723-1750",
    title: "LEIPZIG / WEEKLY PRODUCTION, PUBLIC REACH, LATE SYNTHESIS",
    body: `
      <p class="detail-intro">
        Leipzig is the major output zone: cantor, teacher, administrator, composer, organizer, and sometime public entrepreneur.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Workload</p>
            <h3>The weekly cantata cycle alone would be enough to define a career. Bach does far more.</h3>
            <p>
              As Thomaskantor he oversees music for the city's main churches, trains students, handles bureaucracy,
              and still produces Passions, cantatas, keyboard works, pedagogical collections, and later summary works.
              Leipzig is where sheer volume and sustained ambition become impossible to separate.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Beyond church walls</p>
            <p>
              Through the Collegium Musicum and coffeehouse concerts, Bach also works in semi-public civic culture.
              That matters because it expands the picture: he is not only a church composer,
              but a musician moving between devotional weight, student training, domestic music, and urban performance.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Leipzig landmarks</p>
            <ul class="detail-list">
              <li>Cantata cycles</li>
              <li>St John and St Matthew Passions</li>
              <li>Mass in B minor compiled into late synthesis</li>
              <li>Keyboard teaching works and late abstract projects</li>
            </ul>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("st-matthew", "St Matthew Passion")}
              ${pill("mass-b-minor", "Mass in B minor")}
              ${pill("year-1750", "1750")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "late-years": {
    kicker: "[ DOSSIER / LATE YEARS ]",
    sector: "TIMELINE / 1747-1750",
    title: "LATE YEARS / SUMMATION, ENCOUNTERS, OPEN ENDS",
    body: `
      <p class="detail-intro">
        Bach's final years are not a quiet fade. They are full of compression, summary thinking,
        and works that seem designed to outlast their immediate function.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Court encounter</p>
            <h3>The 1747 meeting with Frederick the Great leads to <em>The Musical Offering</em>, a work built from challenge and response.</h3>
            <p>
              That episode captures late Bach well: he is still operating inside court culture,
              but what he produces from it is increasingly distilled and conceptually charged.
              Procedure becomes visibly part of the art.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Late profile</p>
            <p>
              The Mass in B minor and The Art of Fugue do not feel like routine products for immediate use.
              They feel like summary architectures: backward-looking in materials, forward-looking in abstraction,
              and unusually aware of posterity.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Read the shift</p>
            <div class="detail-code">FROM WEEKLY OUTPUT -> TOWARD COMPILATION, REWORKING, AND STRUCTURAL TESTAMENT</div>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("mass-b-minor", "Mass in B minor")}
              ${pill("art-of-fugue", "Art of Fugue")}
              ${pill("year-1750", "1750")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  brandenburg: {
    kicker: "[ DOSSIER / BRANDENBURG ]",
    sector: "WORK CATALOGUE / CONCERTOS",
    title: "BRANDENBURG CONCERTOS / COLOR UNDER DISCIPLINE",
    body: `
      <p class="detail-intro">
        The Brandenburgs are not six interchangeable showpieces. Each concerto tests a different balance of color,
        hierarchy, and propulsion.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Why start here</p>
            <h3>You hear Bach the engineer and Bach the theatre-maker at the same time.</h3>
            <p>
              Soloists exchange roles, timbres are deliberately contrasted, and the ensemble behaves less like a mass
              than a field of active forces. Brandenburg No. 5 is especially revealing because the harpsichord stops being
              mere continuo support and steps into astonishing solo prominence.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">What to track</p>
            <ul class="detail-list">
              <li>How solo and tutti act like controlled competition.</li>
              <li>How ritornello returns stabilize large movement.</li>
              <li>How dance pulse survives inside virtuosity.</li>
            </ul>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">YouTube route</p>
            <div class="detail-link-row">
              ${link(youtubeRoutes.brandenburg, "Search Brandenburg Route")}
            </div>
            <p>
              I seeded the route toward historically informed performances around Brandenburg No. 5 because it exposes the concerto logic and the harpsichord breakthrough especially clearly.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("harpsichord", "Harpsichord")}
              ${pill("sequences", "Sequences")}
              ${pill("listen-dance", "Dance Engine")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  wtc: {
    kicker: "[ DOSSIER / WTC ]",
    sector: "WORK CATALOGUE / KEYBOARD",
    title: "THE WELL-TEMPERED CLAVIER / KEYS AS A TOTAL FIELD",
    body: `
      <p class="detail-intro">
        Twenty-four preludes and fugues, twice over. Not a single mood, not a drill book, but a whole map of thinking in keys.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">What it does</p>
            <h3>Each pair is both local character study and contribution to a larger total architecture.</h3>
            <p>
              The prelude can act like invitation, machinery, mood field, or kinetic launch.
              The fugue then tests subject design, pacing, texture, and density. Across the whole set,
              Bach demonstrates not just keyboard control but a nearly inexhaustible ability to make order feel alive.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Why people live in it for decades</p>
            <p>
              Players return because voicing, articulation, pacing, and proportion never stop shifting under the fingers.
              Listeners return because each miniature can open into a world, yet the collection also trains the ear to hear process at scale.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">YouTube route</p>
            <div class="detail-link-row">
              ${link(youtubeRoutes.wtc, "Search WTC Route")}
            </div>
            <p>
              This route is aimed at full-cycle or near-full-cycle recordings, not isolated famous preludes only.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("counterpoint", "Counterpoint")}
              ${pill("ornament", "Ornament")}
              ${pill("listen-upper-voice", "Follow a Voice")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "st-matthew": {
    kicker: "[ DOSSIER / ST MATTHEW ]",
    sector: "WORK CATALOGUE / PASSION",
    title: "ST MATTHEW PASSION / DRAMA WITHOUT EXCESS NOISE",
    body: `
      <p class="detail-intro">
        This is sacred drama on a huge scale, but the power comes from structure, pacing, and layered empathy rather than spectacle alone.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">How it works</p>
            <h3>Recitative tells, chorus comments, chorales absorb, arias suspend time.</h3>
            <p>
              Bach organizes the work so that narration, communal response, and intimate reflection continually reframe one another.
              The result is not simply a story of events, but a machine for distributing grief, witness, and contemplation across multiple layers of listeners.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Where to feel the scale</p>
            <p>
              The opening chorus already tells you the proportions: processional rhythm, split ensemble space,
              and chorale material functioning like collective memory. From there the work keeps widening and narrowing
              until the final stillness feels earned rather than decorative.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">YouTube route</p>
            <div class="detail-link-row">
              ${link(youtubeRoutes.stMatthew, "Search St Matthew Route")}
            </div>
            <p>
              The query points toward conductors with strong historical-practice credentials and full-length performance documents.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("leipzig", "Leipzig")}
              ${pill("listen-bass", "Track the Bass")}
              ${pill("year-1750", "1750")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "mass-b-minor": {
    kicker: "[ DOSSIER / MASS IN B MINOR ]",
    sector: "WORK CATALOGUE / LATE SYNTHESIS",
    title: "MASS IN B MINOR / SUMMARY WORK, NOT RETREAT",
    body: `
      <p class="detail-intro">
        The Mass in B minor feels like Bach surveying the full field late in life and refusing to simplify it.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">What makes it late</p>
            <h3>It gathers styles, revises earlier materials, and turns liturgical text into a pan-European statement.</h3>
            <p>
              This is not a regular weekly service piece. It is a monumental compilation and rethinking,
              where learned counterpoint, vocal brilliance, dance-derived rhythm, and solemn large-form pacing coexist.
              The scale feels retrospective and open-ended at once.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">What to hear</p>
            <ul class="detail-list">
              <li>The shift from collective blaze to inward suspension.</li>
              <li>How earlier styles are not quoted nostalgically but reactivated.</li>
              <li>How choral massiveness and fine-grained counterpoint keep alternating.</li>
            </ul>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">YouTube route</p>
            <div class="detail-link-row">
              ${link(youtubeRoutes.massBMinor, "Search B Minor Mass Route")}
            </div>
            <p>
              The search is aimed at large-scale complete performances, where the work's architectural span becomes audible.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("leipzig", "Leipzig")}
              ${pill("year-1750", "1750")}
              ${pill("listen-cadence", "Cadence")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "cello-suites": {
    kicker: "[ DOSSIER / CELLO SUITES ]",
    sector: "WORK CATALOGUE / SOLO LINE",
    title: "CELLO SUITES / ONE LINE IMPLYING A WHOLE BUILDING",
    body: `
      <p class="detail-intro">
        The cello suites are a masterclass in implication: harmony without full chords, architecture without thick texture.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">What makes them radical</p>
            <h3>Single-line writing still creates bass, middle, and upper function through contour, register, and rhythm.</h3>
            <p>
              Bach writes so that the ear supplies missing parts. Arpeggiation, resonance, dance meter,
              and the instrument's range suggest a whole harmonic environment from minimal surface information.
              That economy is exactly why the music keeps sounding inexhaustible.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Dance matters</p>
            <p>
              Each suite is built from dance types. If the pulse goes rigid, the structure dies.
              If the pulse becomes loose without shape, the architecture blurs. Great playing keeps bodily lift and formal clarity in the same frame.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">YouTube route</p>
            <div class="detail-link-row">
              ${link(youtubeRoutes.celloSuites, "Search Cello Suites Route")}
            </div>
            <p>
              The route is aimed at historically alert performances where dance profile remains audible, not only broad romantic sound.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("koethen", "Koethen")}
              ${pill("listen-dance", "Dance Engine")}
              ${pill("viola-da-gamba", "Viola da Gamba")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "art-of-fugue": {
    kicker: "[ DOSSIER / ART OF FUGUE ]",
    sector: "WORK CATALOGUE / LATE ABSTRACT FIELD",
    title: "THE ART OF FUGUE / PROCESS EXPOSED",
    body: `
      <p class="detail-intro">
        The Art of Fugue feels less like repertory piece and more like an exposed machine:
        subject, inversion, augmentation, density, pressure.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Why it feels severe</p>
            <h3>Bach reduces the listener's distractions and makes procedure itself dramatic.</h3>
            <p>
              One core subject keeps returning in new conditions. The interest lies not in sudden theatrical color
              but in watching a musical idea survive transformation after transformation.
              That is why the work can feel austere at first and overwhelming later.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">How to approach it</p>
            <p>
              Do not ask for mood first. Ask what has changed: spacing, inversion, density, speed of implication,
              relation between voices. Once those processes become audible, the work opens like engineered narrative.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">YouTube route</p>
            <div class="detail-link-row">
              ${link(youtubeRoutes.artOfFugue, "Search Art of Fugue Route")}
            </div>
            <p>
              The route is aimed at ensemble realizations that clarify line relations and keep the work from sounding merely academic.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("counterpoint", "Counterpoint")}
              ${pill("bach-core", "Why Bach Dominates")}
              ${pill("year-1750", "1750")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "baroque-violin": {
    kicker: "[ DOSSIER / BAROQUE VIOLIN ]",
    sector: "INSTRUMENTS / STRING FRONT",
    title: "BAROQUE VIOLIN / QUICKER ATTACK, LESS METAL, MORE SPEECH",
    body: `
      <p class="detail-intro">
        The baroque violin does not simply sound like a smaller modern violin.
        Its setup changes articulation, resistance, and the shape of a phrase.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Build logic</p>
            <h3>Gut strings, lower tension, and a lighter setup produce quicker speech and less continuous shine.</h3>
            <p>
              The instrument reacts faster but sustains differently. That makes articulation more exposed.
              Passages can bite, dance, or flare with a grain that later high-tension violin culture often smooths out.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Where it matters in Bach</p>
            <p>
              Solo violin writing, concerto passages, and ensemble leadership all benefit from this profile.
              The line can sound nimble and rhetorical rather than upholstered.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Fast comparison</p>
            <div class="detail-code">BAROQUE / LIGHTER, FASTER, GRAINIER\nMODERN / STRONGER TENSION, LONGER SUSTAIN, MORE HOMOGENEOUS SHEEN</div>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("brandenburg", "Brandenburg")}
              ${pill("ornament", "Ornament")}
              ${pill("listen-dance", "Dance Engine")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  harpsichord: {
    kicker: "[ DOSSIER / HARPSICHORD ]",
    sector: "INSTRUMENTS / CONTINUO GRID",
    title: "HARPSICHORD / DRY ATTACK, MAXIMUM CLARITY",
    body: `
      <p class="detail-intro">
        The harpsichord plucks instead of striking. That changes nearly everything about texture and time.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Sound logic</p>
            <h3>No piano-style crescendo from touch. Shape has to come from rhythm, timing, registration, and line.</h3>
            <p>
              Because the sound decays quickly, the instrument clarifies harmony rather than bathing it.
              That dryness is not a limitation. It is one reason baroque counterpoint and continuo stay legible at speed.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Bach use case</p>
            <p>
              In continuo it is a harmonic grid. In solo repertory it becomes a world of articulation and design.
              In Brandenburg No. 5 it unexpectedly steps into the foreground and behaves like a concerto soloist.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Listen for</p>
            <ul class="detail-list">
              <li>How attack defines harmony more than sustain does.</li>
              <li>How passagework becomes precision rather than blur.</li>
              <li>How continuo realization animates recitative and ensemble texture.</li>
            </ul>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("continuo", "Continuo")}
              ${pill("wtc", "Well-Tempered Clavier")}
              ${pill("brandenburg", "Brandenburg")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "viola-da-gamba": {
    kicker: "[ DOSSIER / GAMBA ]",
    sector: "INSTRUMENTS / INNER BASS",
    title: "VIOLA DA GAMBA / FRETTED DEPTH, VOCAL BASS COLOR",
    body: `
      <p class="detail-intro">
        The viola da gamba belongs to a different branch of string culture than the violin family.
        Its sound is less about mass and more about inflected speech.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Profile</p>
            <h3>Frets, multiple strings, and a softer edge make the instrument intimate without making it weak.</h3>
            <p>
              The gamba can sustain reflective, inward color in a way that differs from the cello's direct projection.
              In chamber textures it adds moral weight without immediately turning heroic.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Why it matters around Bach</p>
            <p>
              Bach writes for a culture in which the older gamba tradition is still alive.
              That coexistence is historically important: the baroque field is not one straight line to modern orchestral standardization.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">What to hear</p>
            <ul class="detail-list">
              <li>Less metallic edge than the cello.</li>
              <li>A bass register that can still sound speaking and interior.</li>
              <li>Blend with continuo rather than dominate it.</li>
            </ul>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("continuo", "Continuo")}
              ${pill("cello-suites", "Cello Suites")}
              ${pill("listen-bass", "Track the Bass")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "baroque-oboe": {
    kicker: "[ DOSSIER / BAROQUE OBOE ]",
    sector: "INSTRUMENTS / REED EDGE",
    title: "BAROQUE OBOE / PUNGENT, REEDY, DIRECT",
    body: `
      <p class="detail-intro">
        The baroque oboe cuts differently from its later descendant. Fewer keys and a more direct reed profile give it a rawer line.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Tone character</p>
            <h3>It is less homogenized, more grain-forward, and often more vulnerable sounding at the edges.</h3>
            <p>
              That vulnerability is expressive power. In choruses and orchestral textures the baroque oboe can slice through
              without sounding like a modern industrial beam. It remains human, breath-shaped, and exposed.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Function in Bach</p>
            <p>
              Oboes often sharpen affect, reinforce choral color, or add a piercing strand above the strings.
              They are especially useful when Bach wants brightness without brass spectacle.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Fast hearing note</p>
            <div class="detail-code">LESS POLISHED THAN MODERN OBOE / MORE REED GRAIN / MORE HISTORICAL BITE</div>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("brandenburg", "Brandenburg")}
              ${pill("st-matthew", "St Matthew Passion")}
              ${pill("listen-upper-voice", "Follow a Voice")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "listen-bass": {
    kicker: "[ DOSSIER / LISTEN STEP 01 ]",
    sector: "LISTENING / HARMONIC ORIENTATION",
    title: "TRACK THE BASS / FIND THE LOAD-BEARING LINE",
    body: `
      <p class="detail-intro">
        If you lose the bass in Bach, the whole structure can turn decorative.
        Follow it first and the rest of the architecture starts making sense.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Method</p>
            <h3>Ignore the glitter for a moment. Ask where the ground is moving and where it stops.</h3>
            <p>
              The bass line tells you when harmony is traveling, when it is circling,
              and when a cadence is being prepared. Even in very rich textures, the bass often reveals the piece's large directional plan faster than any upper voice does.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Try this</p>
            <ul class="detail-list">
              <li>Listen to a movement once focusing only on low motion.</li>
              <li>Notice repeated bass patterns or sequential descents.</li>
              <li>On a second pass, hear how upper lines either intensify or resist that movement.</li>
            </ul>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Best works for this</p>
            <div class="detail-related">
              ${pill("continuo", "Continuo")}
              ${pill("st-matthew", "St Matthew Passion")}
              ${pill("mass-b-minor", "Mass in B minor")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "listen-upper-voice": {
    kicker: "[ DOSSIER / LISTEN STEP 02 ]",
    sector: "LISTENING / LINE TRACKING",
    title: "ISOLATE ONE UPPER VOICE / HEAR A PERSON, NOT A CLOUD",
    body: `
      <p class="detail-intro">
        Counterpoint becomes much easier once you stop trying to hear everything equally all at once.
        Choose one line and stay with it.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Method</p>
            <h3>Pick a soprano line, an inner part, or a solo instrument and trace its fortunes through the texture.</h3>
            <p>
              Notice where it aligns with the larger structure and where it strains against it.
              This turns Bach from "busy music" into intelligible relational writing. Voices stop being decoration and become agents.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Why it works</p>
            <p>
              Once one line is clear, the surrounding parts start snapping into place around it.
              The ear learns relative depth rather than drowning in total density.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("counterpoint", "Counterpoint")}
              ${pill("wtc", "Well-Tempered Clavier")}
              ${pill("baroque-oboe", "Baroque Oboe")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "listen-dance": {
    kicker: "[ DOSSIER / LISTEN STEP 03 ]",
    sector: "LISTENING / RHYTHMIC BODY",
    title: "NOTICE THE DANCE ENGINE / FORM STILL HAS LEGS",
    body: `
      <p class="detail-intro">
        Bach can sound severe, but much of the motion still comes from dance inheritance.
        If the body disappears, the style flattens.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">What to feel</p>
            <h3>Courante, sarabande, gavotte, gigue: these are not museum labels but rhythmic engines.</h3>
            <p>
              Even when the music is learned or devotional, the pulse often remembers actual steps,
              weight shifts, lifts, and asymmetries. That is why good Bach performance rarely sounds merely square.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Test case</p>
            <p>
              Try the cello suites or instrumental movements from Koethen first.
              Then notice how even larger sacred or keyboard works retain that bodily inheritance under more elaborate surfaces.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("koethen", "Koethen")}
              ${pill("cello-suites", "Cello Suites")}
              ${pill("ornament", "Ornament")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "listen-cadence": {
    kicker: "[ DOSSIER / LISTEN STEP 04 ]",
    sector: "LISTENING / ARRIVAL FORCE",
    title: "LISTEN FOR CADENCE / IMPACT IS PREPARED, NOT ADDED",
    body: `
      <p class="detail-intro">
        In Bach, arrival rarely comes out of nowhere. Cadence is a managed release of stored force.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Method</p>
            <h3>Hear how dissonance, bass motion, suspension, and rhetorical delay make the landing meaningful.</h3>
            <p>
              When a cadence finally arrives, it can feel like impact not because it is loud, but because so much has been prepared for it.
              This is one reason Bach can sound emotionally overwhelming while remaining formally exact.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Where to hear it best</p>
            <p>
              Chorales, large choral movements, and keyboard fugues are excellent training grounds.
              The release is often audible even before you could explain it theoretically.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("sequences", "Sequences")}
              ${pill("mass-b-minor", "Mass in B minor")}
              ${pill("year-1750", "1750")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "afterlives-overview": {
    kicker: "[ DOSSIER / AFTERLIVES ]",
    sector: "MODERN SIGNAL / TRANSLATION ENGINE",
    title: "BACH AFTER 1750 / NOT A RELIC, A TRANSFERABLE SYSTEM",
    body: `
      <p class="detail-intro">
        Bach survives because the music carries procedures that can be moved into new sound worlds
        without collapsing: line, sequence, bass logic, dialogue, and formal pressure.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Signal image</p>
            <figure class="detail-media-frame">
              <img
                src="assets/afterlife-signal.png"
                alt="Photorealistic editorial still life of Bach score pages feeding into modern audio hardware"
              />
            </figure>
            <p class="detail-caption">
              ARCHIVE PAGES BECOME MODERN SIGNAL PATH: SCORE -> STUDIO -> NEW GENRE GRAMMARS.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">What survives</p>
            <h3>The instrumentation can change radically while the compositional load-bearing members remain legible.</h3>
            <p>
              Jazz can absorb Bach through harmonic extension, rhythmic looseness, and ensemble conversation.
              Metal can absorb Bach through attack, doubled line-work, riff pressure, and amplified contrast.
              The point is not that every adaptation is good. The point is that Bach gives later musicians unusually sturdy material to test.
            </p>
            <div class="detail-code">SURVIVES / COUNTERPOINT / BASS MOTION / SEQUENCE / DIALOGUE / CADENTIAL DRIVE\nTRANSLATES / SWING / DISTORTION / AMPLIFICATION / STUDIO COLOR / GENRE ATTACK</div>
          </section>
          <section class="detail-block">
            <p class="label">Reading rule</p>
            <p>
              Treat these local examples as evidence of transmission, not novelty stunts. They show how Bach can keep generating structure
              after the original instruments, liturgical settings, and performance norms have changed.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("bwv31-jazz", "BWV 31 / Jazz")}
              ${pill("bwv1060-metal", "BWV 1060 / Metal")}
              ${pill("year-1750", "1750")}
            </div>
          </section>
          <section class="detail-block">
            <p class="label">Fast thesis</p>
            <p>
              Bach remains current because his works operate as finished compositions and as reusable structural vocabularies.
            </p>
          </section>
        </aside>
      </div>
    `,
  },
  "bwv31-jazz": {
    kicker: "[ DOSSIER / BWV 31 ]",
    sector: "AFTERLIVES / JAZZ TRANSLATION",
    title: "BWV 31 AS JAZZ / SACRED MATERIAL, REHARMONIZED AIR PRESSURE",
    body: `
      <p class="detail-intro">
        This local reinterpretation turns Bach's cantata-derived material into a jazz object:
        more harmonic breath, more flexible time, but still a Bach-shaped pressure path underneath.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Visual field</p>
            <figure class="detail-media-frame">
              <img
                src="assets/bwv31-jazz.png"
                alt="Photorealistic editorial image of a jazz reinterpretation environment for Bach BWV 31"
              />
            </figure>
            <p class="detail-caption">
              PIANO / BASS / DRUMS / BRASS COLOR: BACH'S MATERIAL MOVED INTO A JAZZ ROOM.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Playback</p>
            <div class="detail-audio">
              <audio controls preload="none" src="assets/bwv31.mp3"></audio>
              <p class="detail-caption">LOCAL USER-SUPPLIED EXAMPLE / MODERN JAZZ READING OF BWV 31.</p>
            </div>
          </section>
          <section class="detail-block">
            <p class="label">What changes</p>
            <h3>The liturgical surface loosens into jazz phrasing, but Bach's line-logic still organizes the room.</h3>
            <p>
              Jazz translation usually works by opening the harmony, redistributing accent, and giving the ensemble more conversational elasticity.
              That can make Bach feel less carved in stone and more respirational. What matters is whether the version keeps directional force:
              voice-leading, periodic return, and rhetorical arrival.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">What to listen for</p>
            <ul class="detail-list">
              <li>Whether the bass still behaves like a structural guide rather than mere atmosphere.</li>
              <li>How reharmonization thickens color without erasing the underlying contour.</li>
              <li>Whether rhythmic looseness clarifies phrase rhetoric or merely softens it.</li>
            </ul>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Fast read</p>
            <div class="detail-code">BACH MATERIAL -> JAZZ HARMONY / FLEXIBLE TIME / ENSEMBLE DIALOGUE -> NEW COLOR, SAME PRESSURE MAP</div>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("afterlives-overview", "Afterlives")}
              ${pill("continuo", "Continuo")}
              ${pill("listen-bass", "Track the Bass")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "bwv1060-metal": {
    kicker: "[ DOSSIER / BWV 1060 ]",
    sector: "AFTERLIVES / METAL TRANSLATION",
    title: "BWV 1060 AS HEAVY METAL / DOUBLE CONCERTO BECOMES TWIN-GUITAR FORCE",
    body: `
      <p class="detail-intro">
        BWV 1060 already contains paired lead logic. In a metal setting that dialogue can become a twin-guitar machine
        without losing the antagonistic elegance of the source.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Visual field</p>
            <figure class="detail-media-frame">
              <img
                src="assets/bwv1060-metal.png"
                alt="Photorealistic editorial image of a heavy metal reinterpretation environment for Bach BWV 1060"
              />
            </figure>
            <p class="detail-caption">
              TWIN GUITARS / DRUM KIT / AMP WALL: CONCERTO DIALOGUE TRANSLATED INTO AMPLIFIED IMPACT.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Playback</p>
            <div class="detail-audio">
              <audio controls preload="none" src="assets/bwv1060.mp3"></audio>
              <p class="detail-caption">LOCAL USER-SUPPLIED EXAMPLE / HEAVY METAL READING OF BWV 1060.</p>
            </div>
          </section>
          <section class="detail-block">
            <p class="label">Why metal works here</p>
            <h3>Distortion thickens the surface, but the real compatibility comes from attack, repetition, and opposed lead lines.</h3>
            <p>
              Metal is often strong at building pressure through riff recursion, synchronized strike, and sharpened timbral edges.
              Bach's concerto logic can survive there because the music already knows how to stage contest, relay, and return.
              Amplification changes the material feel, but it can also expose the skeleton more brutally.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">What to listen for</p>
            <ul class="detail-list">
              <li>How the two lead strands behave like soloists even when tone becomes heavier.</li>
              <li>Whether the drum attack reinforces cadential shape or flattens it.</li>
              <li>How distortion changes perceived counterpoint from transparency to massed friction.</li>
            </ul>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Fast read</p>
            <div class="detail-code">DOUBLE CONCERTO / CALL + RESPONSE / RETURN PATTERNS -> METAL ATTACK / TWIN LEADS / TIMBRAL MASS</div>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("afterlives-overview", "Afterlives")}
              ${pill("counterpoint", "Counterpoint")}
              ${pill("listen-cadence", "Cadence")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
  "year-1750": {
    kicker: "[ DOSSIER / 1750 ]",
    sector: "CODA / AFTERLIFE",
    title: "1750 / AN END MARKER, NOT AN END OF POWER",
    body: `
      <p class="detail-intro">
        Bach dies in 1750, and textbooks like to use that date as a bar line for the end of the baroque.
        Reality is messier and more interesting.
      </p>
      <div class="detail-layout">
        <div class="detail-stack">
          <section class="detail-block">
            <p class="label">Historical context</p>
            <h3>By 1750 newer tastes are already rising: galant style, lighter phrase structure, different expressive priorities.</h3>
            <p>
              So the date is useful but blunt. Bach's death does not switch Europe overnight from one style to another.
              It marks the passing of one composer whose methods had pushed older systems to unusual density and reach,
              just as new idioms were gathering force around him and around his sons.
            </p>
          </section>
          <section class="detail-block">
            <p class="label">Long afterlife</p>
            <p>
              A major revival point comes in 1829 when Mendelssohn's performance of the <em>St Matthew Passion</em>
              helps return Bach to nineteenth-century public consciousness. After that the afterlife multiplies:
              conservatory training, piano culture, orchestral transcription, Webern and Shostakovich, jazz line-thinking,
              and even twentieth-century electronic re-readings such as <em>Switched-On Bach</em>.
            </p>
            <p>
              Bach reaches the present because his music can function as devotion, design lesson, technical training,
              intellectual puzzle, emotional pressure system, and adaptable raw material all at once.
            </p>
          </section>
        </div>
        <aside class="detail-aside">
          <section class="detail-block">
            <p class="label">Compressed line</p>
            <div class="detail-code">1750 / CONVENIENT STYLE MARKER\n1829 / MENDELSSOHN REVIVAL\n19TH-21ST C. / PEDAGOGY, CONCERT LIFE, MODERNISM, JAZZ, ELECTRONIC RE-READING</div>
          </section>
          <section class="detail-block">
            <p class="label">Open next</p>
            <div class="detail-related">
              ${pill("afterlives-overview", "Afterlives")}
              ${pill("bach-core", "Why Bach Dominates")}
              ${pill("st-matthew", "St Matthew Passion")}
              ${pill("art-of-fugue", "Art of Fugue")}
            </div>
          </section>
        </aside>
      </div>
    `,
  },
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  }
);

const sectorObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible && indicator) {
      indicator.textContent = `SECTOR / ${visible.target.dataset.sector}`;
    }
  },
  {
    threshold: [0.2, 0.4, 0.6],
    rootMargin: "-18% 0px -45% 0px",
  }
);

let activeTrigger = null;

const openDetail = (id, trigger = null) => {
  const detail = detailContent[id];

  if (!detail || !detailOverlay || !detailContentNode) {
    return;
  }

  if (trigger) {
    activeTrigger = trigger;
  }

  detailKicker.textContent = detail.kicker;
  detailSector.textContent = detail.sector;
  detailTitle.textContent = detail.title;
  detailContentNode.innerHTML = detail.body;

  detailOverlay.hidden = false;
  document.body.classList.add("detail-open");

  requestAnimationFrame(() => {
    detailOverlay.classList.add("is-open");
    detailCloseButton?.focus();
  });

  if (detailBody) {
    detailBody.scrollTop = 0;
  }
};

const closeDetail = () => {
  if (!detailOverlay || detailOverlay.hidden) {
    return;
  }

  detailOverlay.classList.remove("is-open");
  document.body.classList.remove("detail-open");

  window.setTimeout(() => {
    detailOverlay.hidden = true;
    if (activeTrigger) {
      activeTrigger.focus();
    }
  }, overlayDelay);
};

sectors.forEach((section) => {
  revealObserver.observe(section);
  sectorObserver.observe(section);
});

detailTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openDetail(trigger.dataset.detail, trigger);
  });

  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetail(trigger.dataset.detail, trigger);
    }
  });
});

const syncAfterlifePlayState = (button, audio) => {
  const textNode = button.querySelector(".afterlife-play-text");
  const isPlaying = !audio.paused && !audio.ended;

  button.classList.toggle("is-playing", isPlaying);

  if (textNode) {
    textNode.textContent = isPlaying ? "PAUSE EXAMPLE" : "PLAY EXAMPLE";
  }
};

afterlifePlayButtons.forEach((button) => {
  const audio = document.getElementById(button.dataset.audioTarget);

  if (!(audio instanceof HTMLAudioElement)) {
    return;
  }

  const sync = () => syncAfterlifePlayState(button, audio);

  sync();

  button.addEventListener("click", () => {
    if (audio.paused || audio.ended) {
      afterlifeAudioNodes.forEach((otherAudio) => {
        if (otherAudio !== audio) {
          otherAudio.pause();
        }
      });

      audio.play().catch(() => {
        sync();
      });
      return;
    }

    audio.pause();
  });

  ["play", "pause", "ended", "emptied"].forEach((eventName) => {
    audio.addEventListener(eventName, sync);
  });
});

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open-detail]");

  if (!openButton) {
    return;
  }

  if (openButton.closest("#detail-overlay")) {
    openDetail(openButton.dataset.openDetail);
    return;
  }

  openDetail(openButton.dataset.openDetail, openButton);
});

detailOverlay?.addEventListener("click", (event) => {
  if (
    event.target.closest("[data-detail-close]") ||
    !event.target.closest(".detail-shell")
  ) {
    closeDetail();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDetail();
  }
});
