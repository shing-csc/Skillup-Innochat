import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What are the common challenges of lauguage learning?",
        value: "What are the common challenges of lauguage learning?"
    },
    { text: "Modify the course of Data Science with Finance?", value: "Modify the course of Data Science with Finance?" },
    { text: "What are the key differences between stocks and bonds?", value: "What are the key differences between stocks and bonds?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
