export const Condition = ({test = true,success=<></>, fail=<></>}) => {
    return test ? success : fail
}