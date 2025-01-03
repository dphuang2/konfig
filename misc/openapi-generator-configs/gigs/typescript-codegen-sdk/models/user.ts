/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type user = {
    /**
     * Type of object is always `user`.
     */
    object: string;
    /**
     * Unique identifier for the user.
     */
    id: string;
    /**
     * The birthday of the user.
     */
    birthday: string | null;
    /**
     * The primary email address of the user.
     */
    email: string;
    /**
     * Whether the user's primary email address is verified or not.
     */
    emailVerified: boolean;
    /**
     * The user's full name. Required for some Plans.
     */
    fullName: string | null;
    /**
     * The user's locale preference represented as an [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag).
     */
    preferredLocale: string;
    /**
     * Time when the user was created.
     */
    createdAt: string;
};

