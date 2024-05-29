from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

NEWS = [
    {
        'id': 'n1',
        'slug': 'sequencing-of-human-brain-uncovers-new-gene-transcripts',
        'title': 'Sequencing of the human brain uncovers new gene transcripts',
        'image': 'sequencing.jpg',
        'date': '2024-03-01',
        'content': 'Researchers uncovered 214,516 unique isoforms in the developing neocortex -- over 70% of which have not been previously studied.',
    },
    {
        'id': 'n2',
        'slug': 'drug-like-inhibitor-preventing-flu',
        'title': 'Drug-like inhibitor shows promise in preventing flu',
        'image': 'medicine.jpg',
        'date': '2022-05-01',
        'content': 'Currently available flu medications only target the virus after it has already established an infection, but what if a drug could prevent infection in the first place? Now, scientists have designed drug-like molecules to do just that, by thwarting the first stage of influenza infection.',
    },
    {
        'id': 'n3',
        'slug': 'gene-regulating-human-brain',
        'title': 'Scientists map networks regulating gene function in the human brain',
        'image': 'brain.jpg',
        'date': '2021-02-01',
        'content': 'A consortium of researchers has produced the largest and most advanced multidimensional maps of gene regulation networks in the brains of people with and without mental disorders. These maps detail the many regulatory elements that coordinate the brains biological pathways and cellular functions. The research used postmortem brain tissue from over 2,500 donors to map gene regulation networks across different stages of brain development and multiple brain-related disorders.',
    },
    {
        'id': 'n4',
        'slug': 'new-approach-epstein-virus',
        'title': 'New approach to Epstein-Barr virus and resulting diseases',
        'image': 'virus.jpg',
        'date': '2024-01-01',
        'content': 'The Epstein-Barr virus can cause a spectrum of diseases, including a range of cancers. Emerging data now show that inhibition of a specific metabolic pathway in infected cells can diminish latent infection and therefore the risk of downstream disease.',
    },
    {
        'id': 'n5',
        'slug': 'predicting-cancer-risks',
        'title': 'Predicting cancer risks on the basis of national health data',
        'image': 'cancer.jpg',
        'date': '2022-07-01',
        'content': 'Scientists are predicting individual risks for 20 different types of cancer with a high degree of accuracy. The prediction model could help to identify people with a high risk of cancer, for whom individualized early detection programs could be tested in studies.',
        'text1': 'If cancers are detected early, the chances of cure are generally higher and patients require less intensive treatment. However, screening programs for the early detection of cancer only exist for a few tumor diseases -- and not all people take advantage of these offers. If there were a simple way to filter out people with a very high risk of developing cancer, screening programs could be developed specifically for those at risk. Researchers led by Moritz Gerstung from the DKFZ and the European Bioinformatics Institute EMBL-EBI, Hinxton, UK, have now published a feasibility study on this topic. The data scientists used the comprehensive data from the Danish health register, in which all clinical diagnoses of the population are stored, to quantify the individual disease risks for 20 different types of cancer.',
    },
     {
        'id': 'n6',
        'slug': 'genetic-mosaicism',
        'title': 'Genetic mosaicism more common than thought',
        'image': 'mosaicism.jpg',
        'date': '2024-05-28',
        'content': 'Researchers found that approximately one in 40 human bone marrow cells carry massive chromosomal alterations without causing any apparent disease or abnormality. Even so-called normal cells carry all sorts of genetic mutations, meaning there are more genetic differences between individual cells in our bodies than between different human beings. The discovery was enabled by a single-cell sequencing technology called Strand-seq, a unique DNA sequencing technique that can reveal subtle details of genomes in single cells that are too difficult to detect with other methods.',
    },
     {
        'id': 'n7',
        'slug': 'CRISPR-trial',
        'title': 'Participants of pioneering CRISPR gene editing trial see vision improve',
        'image': 'crispr.jpg',
        'date': '2024-05-06',
        'content': 'About 79% of clinical trial participants experienced measurable improvement after receiving experimental, CRISPR-based gene editing that is designed to fix a rare form of blindness, according to a new article.',
    },
     {
        'id': 'n8',
        'slug': 'birth-control-for-men',
        'title': 'A promising approach to develop a birth control pill for men',
        'image': 'men.jpg',
        'date': '2022-12-18',
        'content': 'Researchers show in animal models that a novel, non-hormonal sperm-specific approach offers a promising option for reversible human male contraception.',
    },
]

def init_db():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute(
        '''
        CREATE TABLE IF NOT EXISTS news (
            id TEXT PRIMARY KEY,
            slug TEXT UNIQUE,
            title TEXT,
            content TEXT,
            date TEXT,
            image TEXT
        )
        '''
    )
    cursor.execute('SELECT COUNT(*) FROM news')
    count = cursor.fetchone()[0]
    if count == 0:
        cursor.executemany(
            '''
            INSERT INTO news (id, slug, title, content, date, image) 
            VALUES (?, ?, ?, ?, ?, ?)
            ''',
            [(news['id'], news['slug'], news['title'], news['content'], news['date'], news['image']) for news in NEWS]
        )
    conn.commit()
    conn.close()

@app.route('/news', methods=['GET'])
def get_news():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM news')
    news = cursor.fetchall()
    conn.close()
    news_list = [
        {
            'id': row[0],
            'slug': row[1],
            'title': row[2],
            'content': row[3],
            'date': row[4],
            'image': row[5],
        } for row in news
    ]
    return jsonify(news_list)

if __name__ == '__main__':
    init_db()
    app.run(port=8080)
