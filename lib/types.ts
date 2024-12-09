

// we define the type of the active section, number means the index of the array, name means the name of the section
import {links} from "@/lib/data";

export type SectionName = typeof links[number]["name"]