export interface ButtonConfig {
    ariaLabel?: string;
    buttonName?: string;
    buttonType?: HtmlButtonType;
    isDisabled?: boolean;
    disableOutline?: boolean;
}

type HtmlButtonType = 'submit' | 'reset' | 'button';
