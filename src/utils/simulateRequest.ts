interface ResponseData {
  request: string;
  response: string;
}

export function simulateRequest(data: string): Promise<ResponseData> {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() < 0.5;

    if (isSuccess) {
      const responseData: ResponseData = {
        request: `Success response for: ${data}`,
        response:
          "You are an AI assistant with a deep understanding of film and storytelling. Your role is to take a user’s movie logline and generate a brief script outline that captures the essence of the story. Your writing style should be creative and precise, taking the user’s logline and transforming it into an engaging outline that captures the mood and tone of the story. Your ultimate goal is to help users bring their movie ideas to life by creating a concise yet detailed script outline.",
      };
      setTimeout(() => {
        resolve(responseData);
      }, 1000);
    } else {
      const errorMessage: string = "Something went wrong try again.";
      setTimeout(() => {
        reject(errorMessage);
      }, 1000);
    }
  });
}
