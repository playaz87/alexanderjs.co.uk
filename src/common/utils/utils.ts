export const mergeArrayOfObjects = <T>(original: T[], newdata: T[], selector: keyof T, unshift?: boolean) => {
  newdata.forEach(dat => {
    const foundIndex = original.findIndex(ori => ori[selector] == dat[selector]);
    if (foundIndex >= 0) original.splice(foundIndex, 1, dat);
    else unshift ? original.unshift(dat) : original.push(dat);
  });

  return original;
};

export function extractPokeApiId(url?: string) {
  if (!url) return undefined;
  const regex = /\/(\d+)\/(?!.*\/\d+\/)/;
  const match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    return undefined;
  }
}

export function leftPadId(id: string, pad: number = 3) {
  if (id.length < pad) return leftPadId(`0${id}`);
  return id;
}
