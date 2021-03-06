import { getStatus } from './getStatus'

/**
 * @typedef {import("../types").Hangman} Hangman
 *
 * The main Hangman game logic. Takes a guess (a letter or a word) and
 * the current state, and returns an updated state
 * @param {string} guess The guess that the player just made
 * @param {Hangman} currentState The state before the guess was made
 * @returns {Hangman} An updated app state
 */
export function performGuess(guess, currentState) {
  if (
    !guess || // ignore empty guesses
    currentState.guesses.includes(guess) || // ignore duplicate guesses
    getStatus(currentState) !== 'playing' // ignore guesses after game end
  ) {
    return currentState
  }
  return {
    ...currentState,
    guesses: currentState.guesses.concat(guess),
  }
}
