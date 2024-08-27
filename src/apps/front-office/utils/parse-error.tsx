import { trans } from "@mongez/localization";
import { isEmpty } from "@mongez/supportive-is";

export default function parseError(error: any) {
  if (isEmpty(error)) {
    return null;
  }

  if (error.response) {
    error = error.response;
  }

  if ([405, 500, 401].includes(error.status)) {
    return trans("somethingWentWrong");
  }

  if (error.status === 404) {
    return trans("notFound");
  }

  if (error?.data?.errors) {
    error = error.data.errors;
  }

  if (error?.data?.error) {
    error = error.data.error;
  }

  let errorContent: any;

  if (Array.isArray(error)) {
    errorContent = error.map((error: any) => {
      if (error.value) {
        return <div key={error.key}>{error.value}</div>;
      }

      return error;
    });
  } else {
    errorContent = error;
  }

  return errorContent;
}
