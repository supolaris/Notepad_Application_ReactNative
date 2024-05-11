import {
    ReactNode,
    createContext,
    useState,
    Dispatch,
    SetStateAction,
    useContext,
  } from 'react';
  
  interface ContextType {
    interestData: [
      {
        id: number;
        title: string;
      },
    ];

    setInterestData: Dispatch<
      SetStateAction<
        [
          {
            id: number;
            title: string;
          },
        ]
      >
    >;

    music: {
      title: string;
      artist: string;
      artwork: string;
      url: string;
      id: number;
    }[];

    currentMusicIndex: number;
    setCurrentMusicIndex: Dispatch<SetStateAction<number>>;
    isSetPlayer: boolean;
    setIsSetPlayer: Dispatch<SetStateAction<boolean>>;
    isPaused: boolean;
    setIsPaused: Dispatch<SetStateAction<boolean>>;
    playBackSpeed: number;
    setPlayBackSpeed: Dispatch<SetStateAction<number>>;
  }
  const initialContextValue: ContextType = {
    interestData: [{id: 1, title: ''}],
    setInterestData: () => {},
    music: [],
    currentMusicIndex: 0,
    setCurrentMusicIndex: () => {},
    isSetPlayer: false,
    setIsSetPlayer: () => {},
    isPaused: true,
    setIsPaused: () => {},
    playBackSpeed: 1,
    setPlayBackSpeed: () => {},
  };
  
  const userContext = createContext<ContextType>(initialContextValue);
  export const UserProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [interestData, setInterestData] =
      useState<ContextType['interestData']>();
    const [currentMusicIndex, setCurrentMusicIndex] =
      useState<ContextType['currentMusicIndex']>(-1);
    const [isSetPlayer, setIsSetPlayer] =
      useState<ContextType['isSetPlayer']>(true);
    const [music, setMusic] = useState<ContextType['music']>([
      {
        title: 'Death Bed',
        artist: 'Powful',
        artwork: 'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
        url: 'https://samplesongs.netlify.app/Death%20Bed.mp3',
        id: 1,
      },
      {
        title: 'Bad Liar',
        artist: 'Imagine Dragons',
        artwork: 'https://samplesongs.netlify.app/album-arts/bad-liar.jpg',
        url: 'https://samplesongs.netlify.app/Bad%20Liar.mp3',
        id: 2,
      },
      {
        title: 'Faded',
        artist: 'Alan Walker',
        artwork: 'https://samplesongs.netlify.app/album-arts/faded.jpg',
        url: 'https://samplesongs.netlify.app/Faded.mp3',
        id: 3,
      },
      {
        title: 'Hate Me',
        artist: 'Ellie Goulding',
        artwork: 'https://samplesongs.netlify.app/album-arts/hate-me.jpg',
        url: 'https://samplesongs.netlify.app/Hate%20Me.mp3',
        id: 4,
      },
      {
        title: 'Solo',
        artist: 'Clean Bandit',
        artwork: 'https://samplesongs.netlify.app/album-arts/solo.jpg',
        url: 'https://samplesongs.netlify.app/Solo.mp3',
        id: 5,
      },
      {
        title: 'Without Me',
        artist: 'Halsey',
        artwork: 'https://samplesongs.netlify.app/album-arts/without-me.jpg',
        url: 'https://samplesongs.netlify.app/Without%20Me.mp3',
        id: 6,
      },
      {
        id: 7,
        url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
        title: 'Keys of moon',
        artist: 'The Epic Hero',
        artwork: 'https://picsum.photos/id/1003/200/300',
      },
      {
        id: 8,
        url: 'https://www.chosic.com/wp-content/uploads/2021/07/Raindrops-on-window-sill.mp3',
        title: 'Raindrops on ',
        artist: '',
        artwork: 'https://picsum.photos/id/10/200/300',
      },
      {
        id: 9,
        url: 'https://www.chosic.com/wp-content/uploads/2021/07/purrple-cat-equinox.mp3',
        title: 'Equinox',
        artist: 'Purple Cat',
        artwork: 'https://picsum.photos/id/1016/200/300',
      },
      {
        id: 10,
        url: 'https://www.chosic.com/wp-content/uploads/2021/04/And-So-It-Begins-Inspired-By-Crush-Sometimes.mp3',
        title: 'And So It Beg',
        artist: 'Purple Cat',
        artwork: 'https://picsum.photos/id/1019/200/300',
      },
      {
        id: 11,
        url: 'https://www.chosic.com/wp-content/uploads/2021/05/inossi-got-you.mp3',
        title: 'Got You',
        artist: 'Purple Cat',
        artwork: 'https://picsum.photos/id/103/200/300',
      },
      {
        id: 12,
        url: 'https://www.chosic.com/wp-content/uploads/2021/04/kvgarlic__largestreamoverloginforestmarch.mp3',
        title: 'Peaceful wate',
        artist: 'Purple Cat',
        artwork: 'https://picsum.photos/id/1038/200/300',
      },
    ]);
    const [isPaused, setIsPaused] = useState<ContextType['isPaused']>(false);
    const [playBackSpeed, setPlayBackSpeed] =
      useState<ContextType['playBackSpeed']>(1);
    return (
      <userContext.Provider
        value={{
          interestData,
          setInterestData,
          music,
          currentMusicIndex,
          setCurrentMusicIndex,
          isSetPlayer,
          setIsSetPlayer,
          isPaused,
          setIsPaused,
          playBackSpeed,
          setPlayBackSpeed,
        }}>
        {children}
      </userContext.Provider>
    );
  };
  export const useUserContext = () => {
    const context = useContext(userContext);
    return context;
  };