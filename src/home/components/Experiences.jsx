import "iconify-icon";

export default function Experiences() {
  return (
    <div className=" w-full mx-auto py-4 md:py-12">
      <div className="skills">
        <div className="skill">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
            className="skills-icon w-12 bg-primary"
          >
            <g fill="#fff">
              <path
                d="m240 128l-48 40H64l-48-40l48-40h128Z"
                opacity={0.2}
              ></path>
              <path d="M69.12 94.15L28.5 128l40.62 33.85a8 8 0 1 1-10.24 12.29l-48-40a8 8 0 0 1 0-12.29l48-40a8 8 0 0 1 10.24 12.3m176 27.7l-48-40a8 8 0 1 0-10.24 12.3L227.5 128l-40.62 33.85a8 8 0 1 0 10.24 12.29l48-40a8 8 0 0 0 0-12.29m-82.39-89.37a8 8 0 0 0-10.25 4.79l-64 176a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 96 224a8 8 0 0 0 7.52-5.27l64-176a8 8 0 0 0-4.79-10.25"></path>
            </g>
          </svg>
          <p>Web programmer</p>
        </div>
        <div className="skill">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="skills-icon bg-primary"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p>UI/UX Designer</p>
        </div>
        <div className="skill">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            className="skills-icon bg-primary "
          >
            <defs>
              <mask id="ipTCategoryManagement0">
                <g fill="none">
                  <rect
                    width={36}
                    height={14}
                    x={6}
                    y={28}
                    stroke="#fff"
                    strokeWidth={4}
                    rx={4}
                  ></rect>
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth={4}
                    d="M20 7H10a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10"
                  ></path>
                  <circle
                    cx={34}
                    cy={14}
                    r={8}
                    fill="#555"
                    stroke="#fff"
                    strokeWidth={4}
                  ></circle>
                  <circle cx={34} cy={14} r={3} fill="#fff"></circle>
                </g>
              </mask>
            </defs>
            <path
              fill="#fff"
              d="M0 0h48v48H0z"
              mask="url(#ipTCategoryManagement0)"
            ></path>
          </svg>
          <p>Projects coordinator</p>
        </div>
      </div>
    </div>
  );
}
