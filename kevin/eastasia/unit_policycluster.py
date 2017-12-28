from eastasia.parser_articles_ko import parse_aggregated

with open('./aggregated.txt') as data_file:
    result_data = data_file.readlines()

parsed_data = parse_aggregated(result_data, 1, 15)
print(parsed_data)