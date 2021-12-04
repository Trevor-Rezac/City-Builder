export function createCountString(skylineCount, waterfrontCount, castleCount) {
    return `You changed the skyline ${skylineCount} ${(skylineCount === 1) ? 'time' : 'times'}, the waterfront ${waterfrontCount} ${(waterfrontCount === 1) ? 'time' : 'times'}, and the castle ${castleCount} ${(castleCount === 1) ? 'time' : 'times'}.`;
}