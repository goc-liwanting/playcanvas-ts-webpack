export type UIStateType = "OnlyChat" | "OnlyUser" | "Both" | "None"
type ActionType = "LeftTopClick" | "RightTopClick"

interface UIState {
    curState: UIStateType
}

export const initialState: UIState = {
    curState: "OnlyChat"
}

export function reducer(state: UIState, action: ActionType): UIState{
    let isMobile = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
    switch (action){
        case "LeftTopClick":
            if (isMobile)
                return { curState: state.curState === "OnlyChat" ? "None" : "OnlyChat" };
            else
                switch(state.curState){
                    case "Both":
                        return {curState: "OnlyUser"}
                    case "OnlyChat":
                        return {curState: "None"}
                    case "OnlyUser":
                        return {curState: "Both"}
                    case "None":
                        return {curState: "OnlyChat"}
                }
        case "RightTopClick":
            if (isMobile)
                return { curState: state.curState === "OnlyUser" ? "None" : "OnlyUser" };
            else
                switch(state.curState){
                    case "Both":
                        return {curState: "OnlyChat"}
                    case "OnlyChat":
                        return {curState: "Both"}
                    case "OnlyUser":
                        return {curState: "None"}
                    case "None":
                        return {curState: "OnlyUser"}
                }
    }
}
