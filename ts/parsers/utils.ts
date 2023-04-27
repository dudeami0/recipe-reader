import { decode } from "html-entities";
import striptags from "striptags";

export function normalizeNodeList(list: Element[]) {
    return list.map((ele) => normalizeElement(ele));
}

export function normalizeElement(
    ele: Element | null,
    attr: string | false = false
) {
    if (ele) {
        if (attr) {
            return normalizeString(ele.getAttribute(attr));
        }
        return normalizeString(ele.textContent);
    }
    return "";
}

export function normalizeString(str: any) {
    if (str === undefined) {
        return "";
    } else if (str instanceof Array) {
        return str.join(" ");
    } else {
        return decode(
            striptags(String(str).trim().replace(new RegExp("\\s+", "ig"), " "))
        );
    }
}
