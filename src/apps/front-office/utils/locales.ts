import { extend, groupedTranslations } from "@mongez/localization";
import {
  arValidationTranslation,
  enValidationTranslation,
} from "@mongez/react-form";
import indexTranslation from "shared/localization/index.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(indexTranslation);

extend("en", { validation: enValidationTranslation });
extend("ar", { validation: arValidationTranslation });
